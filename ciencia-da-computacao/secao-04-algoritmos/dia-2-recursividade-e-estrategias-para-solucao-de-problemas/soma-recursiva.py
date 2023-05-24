def sum_until(n):
    if n == 0:  # caso base
        return 0
    else:
        print(n)
        return n + sum_until(n - 1)  # caso recursivo


print(sum_until(4))
