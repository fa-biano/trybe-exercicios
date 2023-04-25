# Exercício 5: Considere que a cobertura da tinta é de 1 litro para
# cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla
# contendo a quantidade de latas de tinta a serem compradas e o preço total
# a partir do tamanho de uma parede (em m²).

import math


def calc_paint_cost(meters_to_paint):
    liters_per_gallon = 18
    gallon_price = 80
    meters_coverage_per_gallon = liters_per_gallon * 3
    gallons_needed = math.ceil(meters_to_paint / meters_coverage_per_gallon)
    return (gallons_needed, gallons_needed * gallon_price)


print(calc_paint_cost(55))
