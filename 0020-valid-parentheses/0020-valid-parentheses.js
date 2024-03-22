/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        ')': '(',
        '}': '{',
        ']': '[',
    };
    const stack = [];

    for (const item of s.split('')) {
        if (stack.length && obj[item] === stack[stack.length - 1]) {
            stack.pop();
            continue;
        }

        stack.push(item);
    }

    return stack.length === 0;
};
isValid('()')