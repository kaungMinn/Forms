export const valueFrequency = (obj: { [key: string]: any }) => {
  let counter = 0;

  Object.entries(obj).forEach(([key, value]) => {
    if (
      (Array.isArray(value) && !key.includes("Server") && value.length > 0) ||
      (typeof value === "string" && !key.includes("Server") && value.trim()) ||
      (typeof value === "number" && !key.includes("Server") && !isNaN(value)) ||
      (typeof value === "object" && value.start && value.end)
    ) {
      counter += 1;
    }
  });

  return counter;
};
