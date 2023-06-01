# Em um software monitor, o qual verifica a resiliência de outro software,
# precisamos saber o tempo máximo que um software permaneceu sem
# instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# para verificamos se está tudo bem. Supondo um array que contenha os estados
# oletados por nosso software, calcule quanto tempo máximo que o servidor
# permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado1 = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado2 = 4


# Complexidade O(n)
def max_stability_hours(values_list):
    hours = 0
    check_max_hours = 0
    for index in (range(1, len(values_list))):
        if values_list[index] == values_list[index - 1] == 1:
            hours += 1
            if hours > check_max_hours:
                check_max_hours = hours
    return check_max_hours


print(max_stability_hours(valores_coletados1))
print(max_stability_hours(valores_coletados2))
