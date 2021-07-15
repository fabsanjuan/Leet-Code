'''
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2 ** 31, 2 ** 31 - 1], then return 0.
'''
def reverseInt(x):
    if (-2 ** 31) <= x <= (2 ** 31 - 1):
        x_list = list(str(x))
	# Case where the integer is negative.
        if x_list[0] == '-':
            sign = x_list.pop(0)
            lst_reversed = list(reversed(x_list))
            lst_reversed.insert(0, sign)
            int_reversed = int("".join(lst_reversed))
            if (-2 ** 31) <= int_reversed <= (2 ** 31 - 1): # Checks value of answer is also in range.
                return int_reversed
            else:
                return 0
	# Case where the integer is positive.
        else:
            lst_reversed = list(reversed(x_list))
            int_reversed = int("".join(lst_reversed))
            if (-2 ** 31) <= int_reversed <= (2 ** 31 - 1): # Checks value of answer is also in range.
                return int_reversed
            else:
                return 0


