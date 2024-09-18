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
