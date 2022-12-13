const hasCommonElements = (arrA, arrB) => {
  const newArrA = new Set(arrA);
  const newArrB = new Set(arrB);
  return (
    newArrA.size + newArrB.size !== new Set([...newArrA, ...newArrB]).size ||
    !arrB.length
  );
};

export default hasCommonElements;
