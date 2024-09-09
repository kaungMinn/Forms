export const canBeSplit = (value: string, splitter: string) => {
  const result = value.split(splitter);
  if (!result || result.length <= 1) return false;
  return result;
};
