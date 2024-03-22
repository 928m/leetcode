/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const arr = new Array(nums.length).fill(0);
    let result = 1;
    let indexOfZero = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (indexOfZero > -1) {
                return arr;
            }

            indexOfZero = i;
            continue;
        }

        result *= nums[i];
    }

    if (indexOfZero > -1) {
        arr[indexOfZero] = result;
        return arr;
    }
    
    return nums.map((item, index) => {
        return index === indexOfZero ? result : result / item;
    });
};