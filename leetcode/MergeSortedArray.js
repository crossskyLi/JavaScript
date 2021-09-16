const merge = (nums1, m, nums2, n) => {
  let index1 = m - 1;
  let index2 = n - 1;
  let indexMerge = m + n - 1;

  // 第二个数组遍历
  while (index2 >= 0) {
    if (index1 < 0) {
      // 第一个数组遍历完了
      nums1[indexMerge--] = nums2[index2--];
    } else if (index2 < 0) {
      // 第二个数组遍历完了
      nums1[indexMerge--] = nums1[index1--];
    } else if (nums1[index1] > nums2[index2]) {
			// 比较数字大小
      nums1[indexMerge--] = nums1[index1--];
    } else {
      nums1[indexMerge--] = nums2[index2--];
    }
  }
};
