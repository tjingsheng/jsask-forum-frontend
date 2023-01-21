const hasCommonElements = (arrA, arrB) => {
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

export const isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0;
};

export default hasCommonElements;
