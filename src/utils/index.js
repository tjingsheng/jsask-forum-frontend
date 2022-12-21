const hasCommonElements = (arrA, arrB) => {
  const setA = new Set(arrA);
  const setB = new Set(arrB);
  return (
    !arrA.length ||
    !arrB.length ||
    setA.size + setB.size !== new Set([...setA, ...setB]).size
  );
};

export default hasCommonElements;
