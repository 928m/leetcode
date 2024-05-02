/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = [];

    const fn = (n) => {
        if (n === 1) {
            return 1;
        }

        if (n === 2) {
            return 2;
        }

        if (memo[n]) {
            return memo[n];
        }

        memo[n] = fn(n - 2) + fn(n - 1);

        return memo[n];
    }

    return fn(n);
};