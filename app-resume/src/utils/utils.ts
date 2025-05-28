export const humanizeDate = (date: Date | string | number): string => {
  return new Date(date).toLocaleString("en-EN", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const humanizeDateMonthYear = (date: Date | string | number): string => {
  return new Date(date).toLocaleString("en-EN", {
    year: "numeric",
    month: "short",
  });
};

export const parseKeyValues = (keyValuesArray: any[] | undefined) => {
  if (!keyValuesArray) {
    return {};
  }
  return keyValuesArray.reduce((acc, item) => {
    acc[item.key] = item.value;
    return acc;
  }, {});
};
