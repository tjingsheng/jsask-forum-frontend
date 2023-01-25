const hasCommonElements = (arrA, arrB) => {
  if (!Array.isArray(arrA) || !Array.isArray(arrA)) {
    return false;
  }

  const setA = new Set(arrA);
  const setB = new Set(arrB);
  return setA.size + setB.size !== new Set([...setA, ...setB]).size;
};

export const differenceCalculator = (addOne, minusOne) => {
  return addOne && !minusOne ? 1 : !addOne && minusOne ? -1 : 0;
};

export const formatDatetime = (strDatetime) => {
  return new Date(strDatetime).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

export const toggleItemInArray = (arr, item) => {
  return !Array.isArray(arr)
    ? []
    : !arr.includes(item)
    ? arr.concat([item])
    : arr.slice(0, arr.indexOf(item)).concat(arr.slice(arr.indexOf(item) + 1));
};

export const isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0;
};

export default hasCommonElements;
