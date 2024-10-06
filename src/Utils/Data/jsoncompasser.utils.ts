import { CustomerData } from "../../DB/_types";

type KeyValue = Record<string, unknown> | unknown[] | CustomerData; // Object or array

interface ActivityLog {
  delete?: { key: string; value: string };
  add?: { key: string; value: string };
  change?: { key: string; from: string; to: string };
}

const OBJECT_TYPE = "object";
const NKC = "#"; // Nested Key Connector
const KC = "/"; // Key Connector

let valueArray: unknown[] = [];
let activityLogArray: ActivityLog[] = [];
let globalStorage = "";

// Remove unused variables
// let oldObjectKeys: string[] = [];
// let newObjectKeys: string[] = [];
// let res: unknown[] = [];

// Recursively scan the object
const recursivelyScanObject = (
  aValue: KeyValue,
  parent: string | null = null
): void => {
  if (typeof aValue === OBJECT_TYPE) {
    if (!Array.isArray(aValue)) {
      // Recursive call for objects
      Object.keys(aValue).forEach((key) => {
        const current = parent ? `${parent}${NKC}${key}` : key;
        recursivelyScanObject(
          (aValue as Record<string, KeyValue>)[key],
          current
        );
      });
    } else {
      // Recursive call for arrays
      (aValue as unknown[]).forEach((ele, i) => {
        const current = parent ? `${parent}${NKC}${i}` : i.toString();
        recursivelyScanObject(ele as KeyValue, current);
      });
    }
  } else {
    if (parent) globalStorage += parent + KC;
  }
};

// Get value from nested keys
// Get value from nested keys
const getValueFromKeys = (
  keysArray: string[],
  index: number,
  obj: unknown
): unknown => {
  if (obj !== null && (typeof obj === OBJECT_TYPE || Array.isArray(obj))) {
    return getValueFromKeys(
      keysArray,
      index + 1,
      (obj as KeyValue)[keysArray[index] as keyof KeyValue]
    );
  }
  return obj;
};

// Read a specific object key
const readObject = (key: string, obj: KeyValue): unknown => {
  if (Array.isArray(obj)) {
    return obj[parseInt(key)];
  } else if (typeof obj === OBJECT_TYPE) {
    return (obj as Record<string, unknown>)[key];
  }
  return undefined;
};

// Process comparison and log changes
const process = (
  manipulatedString: string,
  scannedObject: KeyValue,
  supportingObject: KeyValue,
  reversing?: boolean
): void => {
  const keysArray = manipulatedString.split(KC);

  for (let i = 0; i < keysArray.length; i++) {
    const nestedArray = keysArray[i].split(NKC);

    let consumerObject: KeyValue = scannedObject;
    let cloneSupporting: KeyValue = supportingObject;

    for (let j = 0; j < nestedArray.length; j++) {
      if (nestedArray[j].length === 0) return;
      const key = nestedArray[j];

      consumerObject = readObject(key, consumerObject) as KeyValue;
      if (cloneSupporting !== undefined)
        cloneSupporting = readObject(key, cloneSupporting) as KeyValue;

      if (consumerObject && cloneSupporting === undefined) {
        if (reversing === undefined) {
          activityLogArray.push({
            delete: {
              key: nestedArray.join("->"),
              value: `${getValueFromKeys(nestedArray, 0, scannedObject)}`,
            },
          });
        } else if (reversing === true) {
          activityLogArray.push({
            add: {
              key: nestedArray.join("->"),
              value: `${getValueFromKeys(nestedArray, 0, scannedObject)}`,
            },
          });
        }

        break;
      }

      if (isPlainValue(reversing, consumerObject, cloneSupporting)) {
        activityLogArray.push({
          change: {
            key: nestedArray.join("->"),
            from: `${consumerObject}`,
            to: `${cloneSupporting}`,
          },
        });
      }
    }
    valueArray.push(consumerObject);
  }
};

// Check if a value is plain (not object/array)
const isPlainValue = (
  reversing: boolean | undefined,
  consumerObject: unknown,
  cloneSupporting: unknown
): boolean => {
  return (
    reversing === undefined &&
    consumerObject !== undefined &&
    cloneSupporting !== undefined &&
    typeof consumerObject !== OBJECT_TYPE &&
    typeof cloneSupporting !== OBJECT_TYPE &&
    !Array.isArray(consumerObject) &&
    !Array.isArray(cloneSupporting) &&
    consumerObject !== cloneSupporting
  );
};

// Scan the object
const scanObject = (aValue: KeyValue): void => {
  globalStorage = "";
  recursivelyScanObject(aValue);
};

// Read scanned object and log differences
const readScannedObject = (
  manipulatedString: string,
  scannedObject: KeyValue,
  paralleledObject: KeyValue,
  reversing?: boolean
): void => {
  process(manipulatedString, scannedObject, paralleledObject, reversing);
};

// Main function to find the difference between two objects
export const diffJSON = (
  field: string,
  oldObject: KeyValue,
  newObject: KeyValue
): Record<string, unknown> => {
  const returnedObject: Record<string, unknown> = {};
  scanObject(oldObject);
  const nko = globalStorage.split(KC);
  nko.pop();

  readScannedObject(globalStorage, oldObject, newObject);
  scanObject(newObject);
  const oko = globalStorage.split(KC);
  oko.pop();
  readScannedObject(globalStorage, newObject, oldObject, true);

  returnedObject.activityLog = activityLogArray;
  returnedObject.field = field;

  // Reset all global data
  valueArray = [];
  activityLogArray = [];
  globalStorage = "";

  return returnedObject;
};
