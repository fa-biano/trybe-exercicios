import time
start_time = time.perf_counter()


def bubble_sort(numbers):
    n = len(numbers)  # Quantidade de elementos na lista

    for ordered_elements in range(n - 1):  # Precisamos ordenar n-1 elementos
        # Vamos percorrer até o elemento anterior ao ordenado
        for item in range(0, n - 1 - ordered_elements):
            # se um elemento for maior, flutuamos ele para cima
            if numbers[item] > numbers[item + 1]:
                current_element = numbers[item]
                numbers[item] = numbers[item + 1]
                numbers[item + 1] = current_element

# Lembra da troca com desempacotamento?
# numbers[item], numbers[item + 1] = numbers[item + 1], numbers[item]
# -> Linha 14 substitui linhas 9, 10 e 11
    return numbers


numbers = [7, 5, 9, 2, 6, 8]
animals = ["zebra", "macaco", "elefante", "arara", "javali"]
print(bubble_sort(numbers))
print(bubble_sort(animals))

end_time = time.perf_counter()
print(f"start: {start_time} end: {end_time} dif: {end_time - start_time}")
