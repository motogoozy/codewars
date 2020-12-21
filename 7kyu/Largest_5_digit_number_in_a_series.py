def solution(digits):
	num_list = list(str(digits))
	nums = []
	
	for idx in range(len(num_list)):
		if idx + 5 <= len(num_list):
			nums.append(int(''.join(num_list[idx:idx+5])))
	
	return max(nums)
