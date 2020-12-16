"""
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
"""

def abbrev_name(name):
	name_arr = name.split(' ')
	return name_arr[0][0].upper() + '.' + name_arr[1][0].upper()
