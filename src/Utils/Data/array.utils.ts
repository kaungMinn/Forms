export const arrayToggle = <T>(
  data: T[],
  dataKey: keyof T,
  value: string
): string[] => {
  const dataArr = data.map((dataValue) => String(dataValue[dataKey]));

  if (dataArr.includes(value)) {
    return dataArr.filter((data) => data !== value);
  } else {
    return [...dataArr, value];
  }
};
