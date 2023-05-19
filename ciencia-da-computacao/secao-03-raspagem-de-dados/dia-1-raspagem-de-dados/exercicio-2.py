# Faça uma requisição ao recurso usuários da API do Github
# (https://api.github.com/users), exibindo o username e url
# de todos os usuários retornados.

import requests


endpoint = 'https://api.github.com/users'
response = requests.get(endpoint)
users = response.json()

for user in users:
    print(f"{user['login']} {user['url']}")
