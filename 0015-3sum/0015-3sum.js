var threeSum = function(nums) {
    let main = 0;
    const obj = {};

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum > 0) {
                right -= 1;
                continue;
            }

            if (sum < 0) {
                left += 1;
                continue;
            }

            const key = [nums[i], nums[left], nums[right]].join(',');
            obj[key] = true;
            left += 1;
        }
    }

    return Object.keys(obj).map((key) => key.split(','));
};
threeSum([-1,0,1,2,-1,-4]);  //Output: [[-1,-1,2],[-1,0,1]]
// threeSum([0,0,0]);  //Output: [[0,0,0]]
