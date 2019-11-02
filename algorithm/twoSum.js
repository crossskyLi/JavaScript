'use strict';
var twoSum = function(nums, target) {
  if (!nums.length) {
    return [];
  }
  let result = [];
  let length = 1;
  let obj = {};
  let whileKey = '';
  obj[nums[0]] = 0;

  while (length < nums.length) {
    if (typeof obj[nums[length]] !== 'undefined') {
      if (target - nums[length] === nums[length]) {
        result = [obj[nums[length]], length];
        break;
      }
      length += 1;
      continue;
    } else {
      obj[nums[length]] = length;
    }
    whileKey = target - nums[length];
    if (typeof obj[whileKey] !== 'undefined' && obj[whileKey] !== length) {
      result = [obj[whileKey], length];
      break;
    }
    length += 1;
  }

  if (!result.length) {
    return [];
  }
  return result;
};
const arr = [650, 920, 125, 277, 199, 863, 997, 417, 568];
const target = 542;
// console.log('result ', twoSum(arr, target));
