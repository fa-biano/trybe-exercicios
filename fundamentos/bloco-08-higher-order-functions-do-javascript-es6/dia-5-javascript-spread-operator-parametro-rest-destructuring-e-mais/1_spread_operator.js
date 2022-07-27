// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'morango', 'melao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['canela', 'aveia', 'leite em pó'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const combine = [...fruit, ...additional]
  return combine
};

console.log(fruitSalad(specialFruit, additionalItens));