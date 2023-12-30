const analyzeArray = (array) => {
  const average = array.reduce((a, b) => a + b, 0) / array.length;

  const min = Math.min(...array);

  const max = Math.max(...array);

  const length = array.length;

  const analyzedArray = {
    average: average,
    min: min,
    max: max,
    length: length,
  };

  return analyzedArray;
};

export default analyzeArray;
