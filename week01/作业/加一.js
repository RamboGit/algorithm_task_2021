/**
 * 加一
 *  https://leetcode-cn.com/problems/plus-one/
 * */
var plusOne = function(digits) {
    let isOneStep = false;
    for (let i = 0; i < digits.length; i++) {
        // 判断需要进一的情况
        if (digits[i] === 9) {
            isOneStep = true;
            digits[i] = 0;
        } else {
            isOneStep = false;
            digits[i] += 1;
            break;
        }
    }
    isOneStep ? digits.unshift(1) : '';
    return digits;
}