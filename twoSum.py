"""
Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to the target.
You may assume that each input would have exactly one solution and you may not use the same element twice. You can return the answer in any order.
"""

# Solution 1:
'''
Take each element in the array 'nums' and add all other elements one by one until reaching the target integer.
'''
def twoSum(nums, target):
    for i in range(len(nums)):
        j = i + 1
	while j < len(nums):
	    result = nums[i] + nums[j]
	    if result == target:
	        result = [i, j]
		return result
	    else:
		j += 1	

# Solution 2:
'''
Subtract each element in the list from the target number and check if it coincides with another element from the list.
'''
def twoSum(nums, target):
    for i in range(len(nums)):
	diff_value = target - nums[i]
	if diff_value in nums:
	    if nums.count(diff_value) == 2:
		j = nums.index(diff_value, nums.index(diff_value) + 1)
		result = [i, j]
		return result
	    elif diff_value * 2 != target:
		j = nums.index(diff_value)
		result = [i, j]
		return result
	    else:
		continue

