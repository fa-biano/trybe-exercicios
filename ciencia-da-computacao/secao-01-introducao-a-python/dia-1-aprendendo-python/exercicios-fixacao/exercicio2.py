# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

num_array = [2, 4, 6, 8]


def avarage_calc(list):
    sum_num = 0
    for num in list:
        sum_num += num
    return sum_num / len(list)


print(avarage_calc(num_array))
