export const canBeSplit = (value: string, splitter: string) => {
  const result = value.split(splitter);
  if (!result || result.length <= 1) {
    console.log("No data comes out as array while splitting!");
    return [];
  }
  return result;
};

export const stringToggle = (selectedValue: string, value: string): string => {
  let selectedValueArray = selectedValue.split(",");
  if (selectedValueArray.includes(value)) {
    selectedValueArray = selectedValueArray.filter(
      (selectedValue) => selectedValue !== value
    );
  } else {
    selectedValueArray.push(value);
  }
  return selectedValueArray.join(",");
};
