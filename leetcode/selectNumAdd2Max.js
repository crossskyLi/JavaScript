const maxSum = arr => {
  const size = arr.length;
  if (size <= 0) return 0;
  else if (size == 1) return arr[0];

  let a = 0,
    b = arr[0];
  let temp;
  for (let i = 1; i < size; i++) {
    temp = a > b ? a : b;
    b = a + arr[i];
    a = temp;
  }
  return b > a ? b : a;
};

maxSum([1, 2, 36, 8])