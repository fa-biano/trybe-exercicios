// 🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (param) => param
  .reduce((acc, curr) => acc + curr.split('').reduce((accum, current) => {
    if (current === 'A' || current === 'a') return accum + 1 
    return accum
  }, 0), 0);

console.log(containsA(names));
