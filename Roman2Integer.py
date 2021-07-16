'''
Given a roman numeral, convert it to an integer.
'''

def roman_2_int(roman_num):
    # Dictionaries that store values of roman numerals in decimal notation.
    exception_numerals = {'IV': -2, 'IX': -2, 'XL': -20, 'XC': -20, 'CD': -200, 'CM': -200}
    standard_numerals = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    # Variable that holds the running total in decimal notation.
    running_total = []
    # Count each roman numeral instance and convert count to decimal value. Add to total.
    for key in standard_numerals.keys():
        key_count = roman_num.count(key)
        decimal_value = key_count * standard_numerals[key]
        running_total.append(decimal_value)
    # Check for exception characters in the string and add to running total.
    for key in exception_numerals.keys():
        if key in roman_num:
            running_total.append(exception_numerals[key])
        else:
            continue 
    # Sum all values in running total for final answer.
    answer = sum(running_total)
    return answer

