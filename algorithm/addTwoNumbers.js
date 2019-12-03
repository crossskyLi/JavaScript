var addTwoNumbers = function(l1, l2) {
  let length = l1.length;
  let arr = [];
  let index = 0;
  let temp = 0;
  let add = 0;
  
  while (length) {
    index = length - 1;
    arr[index] = l1[index] + add;
    if (!l2[index]) {
      break;
    }
    add = 0;
    temp = arr[index] + l2[index];
    if (arr[index] / 10) {
      add = 1;
    }
    arr[index] = temp % 10;
    length--;
  }
  if (add) {
    arr.unshift(1);
    add = 0
  }
  return arr;
};

addTwoNumbers([5, 5, 6], [8, 9, 6]);
