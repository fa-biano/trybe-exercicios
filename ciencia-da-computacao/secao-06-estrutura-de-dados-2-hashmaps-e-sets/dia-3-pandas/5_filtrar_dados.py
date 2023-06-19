import pandas as pd


data = {
    "food": ["abacate", "requeijão", "margarina", "doce de leite", "abacaxi"],
    "type": ["doce", "salgado", "salgado", "doce", "doce"]
}

df = pd.DataFrame(data)

# Aqui fazemos a filtragem pelo tipo "doce" passando a condição
# df["tipo"] == "doce" como índice do loc.
comidas_doces = df.loc[df["type"] == "doce"]

print(comidas_doces)
