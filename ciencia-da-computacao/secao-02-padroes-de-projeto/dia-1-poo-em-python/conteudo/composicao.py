class Ventilador:
    def __init__(self, preco):
        self.preco = preco


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if self.saldo_na_conta >= ventilador.preco:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self) -> str:
        return f"""
        A pessoa {self.nome} comprou o ventilador de
        {self.ventilador.preco} e ficou com saldo de {self.saldo_na_conta}
        """


ventilador_caro = Ventilador(1000)
pessoa_compradora = Pessoa('Jacquim', 1200)
pessoa_compradora.comprar_ventilador(ventilador_caro)

print(pessoa_compradora)
