# Em um software gerenciador de servidores, precisamos verificar o número de
# servidores que se comunicam. Os servidores estão representados como um
# array bidimensional onde o valor 1 representa um computador e 0 a ausência
# do mesmo. Dois servidores se comunicam se eles estão na mesma linha ou mesma
# coluna.

servidores1 = [[1, 0], [0, 1]]
# resultado: 0
# Linhas e colunas são diferentes.

servidores2 = [[1, 0], [1, 1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

servidores3 = [
    [1, 0, 0],
    [1, 0, 0],
    [0, 0, 1],
]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.


# Complexidade O(n.m)
# O algoritmo recebe um array de arrays com tamanho n, que podem ter qtds
# diferentes de linhas e colunas. Portanto possui Complexidade de Tempo O(n.m).
def count_servers(grid):

    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    answer = 0
    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer


print(count_servers(servidores1))
print(count_servers(servidores2))
print(count_servers(servidores3))
