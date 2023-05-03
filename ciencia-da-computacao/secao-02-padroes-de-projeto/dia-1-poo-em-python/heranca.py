class Eletrodomestico():
    def __init__(self, marca, tipo, cor, preco):
        self.marca = marca
        self.tipo = tipo
        self.cor = cor
        self.preco = preco

    def __str__(self) -> str:
        return f"""
        {self.tipo} da marca {self.marca} na cor {self.cor}
        e preco {self.preco}"""


class Secador(Eletrodomestico):
    pass


class Batedeira(Eletrodomestico):
    pass


secador_taiff = Secador('taiff', 'secador', 'preto', 1000)
batedeira_arno = Batedeira('arno', 'batedeira', 'vermelha', 550)
print(secador_taiff)
print(batedeira_arno)
