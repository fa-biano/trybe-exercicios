# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes
# e retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

name_array = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def get_bigger_name(name_list):
    bigger_name = ''
    for name in name_list:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name


print(get_bigger_name(name_array))
