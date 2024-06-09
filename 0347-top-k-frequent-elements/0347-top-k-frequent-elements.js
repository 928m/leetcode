/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const obj = {};

    for (const item of nums) {
        obj[item] = obj[item] ? obj[item] + 1 : 1;
    }

    const result = Object.entries(obj)
    result.sort((a, b) => b[1] - a[1]);

    return result.slice(0, k).map((item) => Number(item[0]));
};