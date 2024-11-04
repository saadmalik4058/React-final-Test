export const UniqueCategory = (data) => {
  return Array.isArray(data)
    ? Array.from(new Set(data.map((item) => item?.category)))
    : [];
};
