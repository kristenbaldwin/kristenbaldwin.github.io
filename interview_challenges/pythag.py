a = list(range(1, 1000))
b = list(range(2, 1000))
c = list(range(3, 1000))

for i in a:
    for j in b:
        for k in c:
            if i + j + k == 1000 and (i * i) + (j * j) == k * k:
                print(i, j, k)
                break


''' Additional way:
for a in range(1,1001):
    for b in range(a+1,1001):
        for c in range(b+1,1001):
            if a + b + c == 1000 and a**2 +b**2==c**2:
                print(a, b, c)
'''