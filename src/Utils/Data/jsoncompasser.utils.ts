type KeyValue = Record<string, unknown> | unknown[]; // Object or array

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
let oldObjectKeys: string[] = [];
let newObjectKeys: string[] = [];
let globalStorage = "";
let res: unknown[] = [];

const recursivelyScanObject = (
  aValue: KeyValue,
  parent: string | null = null
): void => {
  if (typeof aValue === OBJECT_TYPE) {
    // If a value is an object, it can be nested JSON or array, ignoring other cases
    if (!Array.isArray(aValue)) {
      // Recursive call for objects
      Object.keys(aValue).map((key) => {
        const current = parent ? `${parent}${NKC}${key}` : key;
        recursivelyScanObject(aValue[key], current);
      });
    } else {
      // Recursive call for arrays
      aValue.map((ele, i) => {
        let current = parent ? `${parent}${NKC}${i}` : i.toString();
        recursivelyScanObject(ele, current);
      });
    }
  } else {
    if (parent) globalStorage += parent + KC;
  }
};

const getValueFromKeys = (
  keysArray: string[],
  index: number,
  obj: KeyValue
): unknown => {
  if (typeof obj === OBJECT_TYPE || Array.isArray(obj)) {
    return getValueFromKeys(
      keysArray,
      index + 1,
      (obj as KeyValue)[keysArray[index]]
    );
  }
  return obj;
};

const readObject = (key: string, obj: KeyValue): unknown => {
  return obj[key];
};

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

      consumerObject = readObject(key, consumerObject);
      if (cloneSupporting !== undefined)
        cloneSupporting = readObject(key, cloneSupporting);

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

const scanObject = (aValue: KeyValue): void => {
  globalStorage = "";
  recursivelyScanObject(aValue);
};

const readScannedObject = (
  manipulatedString: string,
  scannedObject: KeyValue,
  paralleledObject: KeyValue,
  reversing?: boolean
): void => {
  process(manipulatedString, scannedObject, paralleledObject, reversing);
};

export const diffJSON = (
  field: string,
  oldObject: KeyValue,
  newObject: KeyValue
): Record<string, unknown> => {
  const returnedObject: Record<string, unknown> = {};
  scanObject(oldObject);
  const nko = globalStorage.split(KC);
  nko.pop();
  oldObjectKeys = nko;
  readScannedObject(globalStorage, oldObject, newObject);
  scanObject(newObject);
  const oko = globalStorage.split(KC);
  oko.pop();
  newObjectKeys = oko;
  readScannedObject(globalStorage, newObject, oldObject, true);

  returnedObject.activityLog = activityLogArray;
  returnedObject.field = field;

  // Reset all global data
  valueArray = [];
  activityLogArray = [];
  oldObjectKeys = [];
  newObjectKeys = [];
  globalStorage = "";
  res = [];

  return returnedObject;
};
