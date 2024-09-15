export const arrayToggle = <T>(
  selectedDataCenter: T[],
  data: T,
  dataKey: string
) => {
  const key = dataKey as keyof T;
  let tmp_data_center = [...selectedDataCenter];
  const hasSelectedData = tmp_data_center.some(
    (dataValue) => dataValue[key] === data[key]
  );
  if (hasSelectedData) {
    tmp_data_center = tmp_data_center.filter(
      (dataValue) => dataValue[key] !== data[key]
    );
  } else {
    tmp_data_center.push(data);
  }

  return tmp_data_center;
};
