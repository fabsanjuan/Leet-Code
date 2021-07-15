/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2 ** 31, 2 ** 31 - 1], then return 0.
*/
var reverseInt = function(x) {
    if (((-2) ** 31) <= x && (x <= 2 ** 31 - 1)) {
	// Case where the integer is negative.
        var xArray = Array.from(String(x));
        if (xArray[0] == '-') {
            var sign = xArray.shift();
            xArray.reverse();
            xArray.unshift(sign);
            var xString = xArray.join("");
            var reverseNum = parseInt(xString, 10);
            if (((-2) ** 31) <= reverseNum && (reverseNum <= 2 ** 31 - 1)) {    // Checks value of answer within range.
                return reverseNum;
            } else {
                return 0;
            }
	// Case where the integer is positive.
        } else {
            xArray.reverse();
            var xString = xArray.join("");
            var reverseNum = parseInt(xString, 10);
            if (((-2) ** 31) <= reverseNum && (reverseNum <= 2 ** 31 - 1)) {    // Checks value of answer within range.
                return reverseNum;
            } else {
                return 0;
            }
        }
    }
}


