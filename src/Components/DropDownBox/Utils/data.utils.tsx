export const valueFinder = (
  dataCenter: Record<string, string | boolean | number>,
  dataCenterKey: string
) => {
  let value = "";
  if (
    typeof dataCenter[dataCenterKey] === "string" &&
    dataCenter[dataCenterKey]
  ) {
    value = dataCenter[dataCenterKey];
  } else {
    value = "";
  }

  return value;
};
