/*
Given an integer x, return true if x is a palindrome number.
*/

var isPalindrome = function(x) {
    // Create a list from integer x, reverse it, and compare it to the original.
    let xArray = Array.from(String(x));
    let xCopy = Array.from(xArray);
    xCopy.reverse();
    if (String(xCopy) == String(xArray) {
        return true;
    } else {
        return false;
    }
}

