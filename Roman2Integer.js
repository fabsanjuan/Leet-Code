/*
Given a roman numeral, convert it to an integer.
*/

var roman2Int = function(romanNum) {
    // Key-value object that stores values of roman numerals in decimal notation.
    const exceptionNumerals = {'IV': -2, 'IX': -2, 'XL': -20, 'XC': -20, 'CD': -200, 'CM': -200};
    const standardNumerals = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    // Variable holding running total in decimal notation.
    var runningTotal = [];
    // Count each roman numeral instance and convert count to decimal value. Add to running total.
    for (const key in standardNumerals) {
        var numeralArray = Array.from(romanNum);
        var keyCount = numeralArray.filter(x => x === key).length;
        if (keyCount > 0) {
            var decimalValue = keyCount * standardNumerals[key];
            runningTotal.push(decimalValue)
        } else {
            continue;
        }
    } // Check for exception characters in the string and add to running total.
    for (const key in exceptionNumerals) {
        if (romanNum.includes(key)) {
            runningTotal.push(exceptionNumerals[key]);
        } else {
            continue;
        }
    } // Sum all values in running total for final answer.
    var answer = runningTotal.reduce((a, b) => a + b, 0);
    return answer 

}

