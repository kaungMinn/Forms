export const canBeSplit = (value: string, splitter: string) => {
  const result = value.split(splitter);
  if (!result || result.length <= 1) {
    console.log("No data comes out as array while splitting!");
    return [];
  }
  return result;
};

export const stringToggle = (
  selectedValue: string,
  value: string
): string[] => {
  let selectedValueArray = selectedValue.split(",");
  if (selectedValueArray.includes(value)) {
    selectedValueArray = selectedValueArray.filter(
      (selectedValue) => selectedValue !== value
    );
  } else {
    selectedValueArray.push(value);
  }
  return selectedValueArray;
};

export function camelCaseToLowerSpace(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space before uppercase letters
    .replace(/([A-Z]+)/g, " $1") // Handle cases like "XMLHttpRequest"
    .trim() // Remove any leading or trailing spaces
    .toLowerCase(); // Convert to lowercase
}

export function generateRandomName() {
  const firstNames = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia",
    "Kevin",
    "Laura",
    "Mike",
    "Nina",
    "Oscar",
    "Paula",
    "Quinn",
    "Ryan",
    "Sara",
    "Tom",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Jones",
    "Brown",
    "Davis",
    "Miller",
    "Wilson",
    "Moore",
    "Taylor",
    "Anderson",
    "Thomas",
    "Jackson",
    "White",
    "Harris",
    "Martin",
    "Thompson",
    "Garcia",
    "Martinez",
    "Robinson",
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

export function generateRandomSixDigit() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
