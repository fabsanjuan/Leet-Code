'''
Given an integer x, return true if x is a palindrome integer.
'''

def isPalindrome(x):
    # Create a list from integer x, reverse it, and compare it to the original.
    x_list = list(str(x))
    list_copy = x_list.copy()
    list_copy.reverse()
    if x_list == list_copy:
        return True
    else:
        return False
