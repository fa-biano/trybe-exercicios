# Em um jogo de baralho, as cartas estão representadas por um array numérico.
# Para iniciar o jogo, devemos embaralhar as cartas. Faremos isto dividindo
# uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

# Exemplo 1:
cartas1 = [2, 6, 4, 5]
# cartas por parte = 2
# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas2 = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3
# resultado = [1, 7, 4, 6, 4, 6]


# Complexidade O(n)
def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer

# Ao usar lista[começo:fim:passo] nós temos “slices”, pedaços da lista que
# começam em começo (por padrão 0), terminam em fim (por padrão, até o fim
# da lista) e pula de passo em passo (por padrão, 1). ou seja,
# [11, 12, 21, 22, 31, 32][::2] resulta em [11, 21, 31].


print(shuffle(cartas1))
print(shuffle(cartas2))
