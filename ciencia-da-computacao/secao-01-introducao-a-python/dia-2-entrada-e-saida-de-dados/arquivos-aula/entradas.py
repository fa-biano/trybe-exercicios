def print_v(name):
    for letter in name:
        print(letter)


name_input = input('Digite seu nome ')
print_v(name_input)


############################################


nums = input("Insira valores aqui, separados por espaço: ")
nums_arr = nums.split(" ")

sum = 0
for num in nums_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
