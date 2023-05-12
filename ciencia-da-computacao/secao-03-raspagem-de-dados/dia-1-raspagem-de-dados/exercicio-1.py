# Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba
# seu conteúdo de forma legível.

import requests


endpoint = "https://httpbin.org/encoding/utf8"
response = requests.get(endpoint)

print(response.text)
