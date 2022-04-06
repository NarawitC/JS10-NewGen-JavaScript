function pow2Index3(arr) {
  const result = [...arr];
  result[3] = result[3] ** 2;
  return result;
}

const array1 = [0, 1, 2, 3, 4, 5];
pow2Index3(array1);
