var threeSum = function(nums) {
    let main = 0;
    let left = main + 1;
    let right = left + 1;
    const obj = {};

    nums = nums.sort((a, b) => a - b);

    while (main <= nums.length - 3) {
        if (nums[main] + nums[left] + nums[right] === 0) {
            const key = [nums[main], nums[left], nums[right]].join(',');

            obj[key] = true;
        }

        if (left === nums.length - 2) {
            main += 1;
            left = main + 1;
            right = left + 1;
            continue;
        }

        if (right === nums.length - 1) {
            left += 1;
            right = left + 1;
            continue;
        }

        right += 1;
    }

    return Object.keys(obj).map((key) => key.split(','));
};
// threeSum([-1,0,1,2,-1,-4]);  //Output: [[-1,-1,2],[-1,0,1]]
threeSum([0,0,0]);  //Output: [[0,0,0]]
