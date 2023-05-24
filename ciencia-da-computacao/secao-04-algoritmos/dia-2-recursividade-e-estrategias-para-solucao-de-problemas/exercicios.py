# Crie um algoritmo não recursivo para contar quantos números pares existem
# em uma sequência numérica (1 a n).

def count_even(n):
    counter = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            counter += 1
    return counter


# Transforme o algoritmo criado acima em recursivo.

def recursive_count_even(n):
    print(n)
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_count_even(n - 1)
    else:
        return recursive_count_even(n - 1)


# print('count_even', count_even(4))
# print('recursive_count_even', recursive_count_even(4))


# Crie um algoritmo recursivo que encontre o maior número inteiro em uma lista.

def find_max_int_support(num_list, length):
    if length == 1:
        return num_list[0]
    else:
        max_int = find_max_int_support(num_list, length - 1)
        if max_int > num_list[length - 1]:
            return max_int
        else:
            return num_list[length - 1]


def find_max_int(num_list):
    length = len(num_list)
    return find_max_int_support(num_list, length)


# print(find_max_int([20, 2, 30, 3]))


# Crie um algoritmo recursivo p/ achar o máx divisor comum (mdc) de 2 inteiros

def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


print(mdc(3, 6))
