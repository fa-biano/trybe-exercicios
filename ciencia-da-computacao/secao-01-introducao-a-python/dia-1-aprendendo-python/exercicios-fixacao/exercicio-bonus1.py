# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


num_array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def find_lower_num(number_list):
    lower_num = number_list[0]
    for num in number_list:
        if num < lower_num:
            lower_num = num
    return lower_num


print(find_lower_num(num_array))
