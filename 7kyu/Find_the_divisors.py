def divisors(integer):
    divisors = [];
    for i in range(1, integer + 1):
        if integer % i == 0 and i != 1 and i != integer:
            divisors.append(i)
    if len(divisors) == 0 :
        return str(integer) + ' is prime'
    else:
        return divisors

