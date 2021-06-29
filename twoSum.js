/*
Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to the target.
You may assume that each input would have exactly one solution and you may not use the same element twice. You can return the answer in any order.
*/

// Solution 1:
// Take each element in the array 'nums' and add all other elements one by one until reaching the target integer.
function twoSums(nums, target) {
	for (i=0; i < nums.length; i++) {
		var j = i + 1;
		while (j < nums.length) {
			var sum = nums[i] + nums[j];
			if (sum == target) {
				result = [i, j];
				return result;
			} else {
				j++;
			}
		}
	}
}

// Solution 2:
// Subtract each element in the list from the target number and check if it coincides with another element from the list.
var twoSum = function(nums, target) {
    for (i=0; i < nums.length; i++) {
    	var value = target - nums[i];
    	if (nums.includes(value)) {
      		if (nums.count(value) == 2) {
       			var j = nums.lastIndexOf(value);
        		var result = [i, j];
        		return result;
      	} 	else if (value * 2 != target) {
        		var j = nums.indexOf(value);
        		var result = [i, j];
        		return result;
      } 	else {
        		continue;
      } 
    }
  }
};
