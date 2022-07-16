// 1 - Crie uma função que receba um número e retorne seu fatorial.

const calcFatorial = (num) => {
  let result = 1
  for (let index = 1; index <= num; index += 1) {
    result *= index;
  }
  return result
}

console.log(calcFatorial(6));

// 2 - Crie uma função que receba uma frase e retorne a maior palavra.

const longestWord = (string) => {
  let checkLongWord  = string.split(' ');
  let longestWord = 0
  let finalWord
  for (let index = 0; index < checkLongWord.length; index += 1) {
    const wordLength = checkLongWord[index].length;
    if (wordLength > longestWord) {
      longestWord = wordLength
      finalWord = checkLongWord[index]
    }
  }
  return finalWord
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 3 - Crie uma página com um contador de cliques
// Ver arquivo parte2_exercicio3.htmml

// 4 -  Crie duas funções JavaScript com as seguintes especificações:
// Função 1: Escreva uma função que substitua a letra 'x' em uma frase.
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável com o nome frase, do tipo const e com o valor igual a 'Tryber x aqui!';
// A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const greetings = (nome) => {
  const frase = 'Tryber x aqui!';
  const change = frase.replace('x', nome);
  return change;
}
// console.log(greetings('Bebeto'));

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// A função deverá receber o retorno da Função 1 por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Concatene o valor retornado da Função 1, a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

const skillList = () => {
  const skills = ['Git', 'HTML', 'CSS'];
  console.log(`${greetings('Bebeto')}
Minhas três principais habilidades são:
 * ${skills[0]}
 * ${skills[1]}
 * ${skills[2]}`);
}

skillList();
