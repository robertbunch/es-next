import math

sum = 0
x = str(math.factorial(100))
print(x)
for num in x:
    sum += int(num)
print(sum)