export const sortDescendingOrder = (data: any[], objKey: string) => {
  if (objKey) {
    return data.sort((a, b) => (a[objKey] > b[objKey] ? -1 : 1));
  }
  return data.sort((a, b) => (a > b ? -1 : 1));
};

export const sortAscendingOrder = (data: any[], objKey: string) => {
  if (objKey) {
    return data.sort((a, b) => (a[objKey] < b[objKey] ? -1 : 1));
  }
  return data.sort((a, b) => (a < b ? -1 : 1));
};
