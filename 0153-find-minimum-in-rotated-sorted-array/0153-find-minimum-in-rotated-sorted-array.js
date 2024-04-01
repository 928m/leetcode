/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let i = 0;

  if (nums.length === 1) {
    return nums[i];
  }

  while (i < nums.length) {
    if (nums[i] < nums[i + 1]) {
        const firstValue = nums.shift();
        nums.push(firstValue);
        continue;
    }

    return nums[i + 1];
  }
};
findMin([3,4,5,1,2]);