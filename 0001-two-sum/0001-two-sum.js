var twoSum = function (nums, target) {
  const obj = {};

  for (let idx = 0; idx < nums.length; idx += 1) {
    const value = nums[idx];

    obj[value] = idx;
  }

  for (let i = 0; i < nums.length; i += 1) {
    const subtraction = target - nums[i];

    if (obj[subtraction] && obj[subtraction] !== i) {
      console.log([i, obj[subtraction]]);

      return [i, obj[subtraction]];
    }
  }
};