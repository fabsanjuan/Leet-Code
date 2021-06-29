// Function that takes in an array and returns the indices of the 2 elements that sum to the target value.
function twoSums(nums, target) {
	for (var i=0; i < nums.length; i++) {
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

