'''
https://www.codewars.com/kata/5503013e34137eeeaa001648/train/python

Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
'''

def diamond(n):
	if n % 2 == 0 or n <= 0:
		return None

	result = ''
	
	for _ in range(n):
		result += '*'
	result += '\n'

	count = n-2
	spaces = 1
	while count > 0:
		new_line = ''

		for _ in range(count):
			new_line += '*'
		for _ in range(spaces):
			new_line = ' ' + new_line

		new_line += '\n'
		spaces = spaces + 1
		
		result = new_line + result
		result = result + new_line
		count -= 2

	return result

print(diamond(5))
