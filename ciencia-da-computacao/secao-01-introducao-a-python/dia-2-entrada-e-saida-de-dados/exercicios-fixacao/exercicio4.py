# Exercicio 4: Leia o arquivo books.json  e calcule a porcentagem de livros
# em cada categoria em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo  CSV.

import json
import csv

with open('books.json') as file:
    books = json.load(file)

categories = {}
for book in books:
    for category in book['categories']:
        if not categories.get(category):
            categories[category] = 0
        categories[category] += 1

number_of_books = len(books)
books_percentage = [
    [category, qty_books / number_of_books]
    for category, qty_books in categories.items()
]


def sort_criteria(e):
    return e[1]


books_percentage.sort(key=sort_criteria, reverse=True)

header = ["categoria", "porcentagem"]
with open("report.csv", "w") as file:
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(books_percentage)
