/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let maxLen = 0;
    let maxCount = 0;
    let count = new Array(26).fill(0);
    let start = 0;
    const A_CODE = 'A'.charCodeAt(0);

    for (let end = 0; end < s.length; end++) {
        const charIndex = s.charCodeAt(end) - A_CODE;
        count[charIndex]++;
        maxCount = Math.max(maxCount, count[charIndex]);

        while (end - start + 1 - maxCount > k) {
            const startCharIndex = s.charCodeAt(start) - A_CODE;
            count[startCharIndex]--;
            start++;
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
};