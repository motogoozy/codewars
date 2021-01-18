'''
https://www.codewars.com/kata/52f3149496de55aded000410/train/python

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

	sum_digits(10)  # Returns 1
	sum_digits(99)  # Returns 18
	sum_digits(-32) # Returns 5
'''

def sum_digits(number):
	chars = list(str(abs(number)))
	sum = 0
	for char in chars:
		sum += int(char)
	
	return sum

sum_digits(123)
