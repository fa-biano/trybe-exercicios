# Exercicio 4:
# Estenda a classe Stack, para que ela suporte um limite de itens na pilha.
# Se definirmos que a pilha deve ter o tamanho 2, ela não poderá ter 3 itens.

from exercicio2_e_3_stack import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)


stack = LimitStack(2)
stack.push(1)
stack.push(-2)
try:
    stack.push(5)
except StackOverflow:
    print('The Stack is full')
