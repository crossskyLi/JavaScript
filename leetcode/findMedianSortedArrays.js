/*
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5
*/

var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [];
  let length = nums1.length + nums2.length;
  let nums1Index = 0;
  let nums2Index = 0;
  while (nums1Index < nums1.length || nums2Index < nums2.length) {
    if (nums1[nums1Index] === undefined) {
      arr = arr.concat(nums2.slice(nums2Index));
      break;
    }
    if (nums2[nums2Index] === undefined) {
      arr = arr.concat(nums1.slice(nums1Index))
      break;
    }

    if (nums1[nums1Index] <= nums2[nums2Index]) {
      arr.push(nums1[nums1Index]);
      if (arr.length > length / 2) {
        break;
      }
      nums1Index += 1;
    } else {
      arr.push(nums2[nums2Index]);
      if (arr.length > length / 2) {
        break;
      }
      nums2Index += 1;
    }
  }

  const odd = length % 2 > 0;
  const midIndex = odd ? Math.floor(length / 2) : Math.ceil(length / 2);
  const result = odd ? arr[midIndex] : (arr[midIndex] + arr[midIndex - 1]) / 2
  return result;
};
// let result = findMedianSortedArrays([1, 3, 5, 7, 9, 15], [2, 5, 6, 47, 98])
/* 非数组版本 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  let len = m + n;
  let left = -1, right = -1;
  let mStart = 0, nStart = 0;
  for (let i = 0; i <= len / 2; i++) {
    left = right;
    if (mStart < m && (nStart >= n || nums1[mStart] < nums2[nStart])) {
      right = nums1[mStart++];
    } else {
      right = nums2[nStart++];
    }
  }
  if ((len & 1) === 0) {
    return (left + right) / 2.0;
  } else {
    return right;
  }
}
