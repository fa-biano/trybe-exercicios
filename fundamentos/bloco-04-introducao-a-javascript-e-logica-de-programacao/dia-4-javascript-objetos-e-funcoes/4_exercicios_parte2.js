// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindromo(verificacao) {
  let palavra = verificacao;
  let checkPalindromo = palavra.split('').reverse().join('');

  if (palavra === checkPalindromo){
    return true;
  } else {
    return false
  }
};

let verificacao = verificaPalindromo('desenvolvimento');
console.log(verificacao);

verificacao = verificaPalindromo('arara');
console.log(verificacao);

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let inteiros = [2, 3, 6, 7, 10, 1];
let indexDoMaior = 0;

function indiceArrayComMaiorValor() { 
  let maiorValor = inteiros[0];
  
  for (let index = 0; index < inteiros.length; index += 1) {
    if (inteiros[index] > maiorValor){
      maiorValor = inteiros[index];
      indexDoMaior = index;
    }
  }
  
  return indexDoMaior;
}

indiceArrayComMaiorValor();
console.log(indexDoMaior);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let acheOMenor = [2, 4, 6, 7, 10, 0, -3];
let indexDoMenor = 0;

function indiceArrayComMenorValor() { 
  let menorValor = acheOMenor[0];
  
  for (let index = 0; index < acheOMenor.length; index += 1) {
    if (acheOMenor[index] < menorValor){
      menorValor = acheOMenor[index];
      indexDoMenor = index;
    }
  }
  
  return indexDoMenor;
}

indiceArrayComMenorValor();
console.log(indexDoMenor);

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let acheMaiorNome = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorNome = acheMaiorNome[0];

function nomeMaiorCaracterer () {
  for (let index = 0; index < acheMaiorNome.length; index += 1 ) {
    if (acheMaiorNome[index].length > maiorNome.length) {
      maiorNome = acheMaiorNome[index]
    }
  }

  return maiorNome
}

nomeMaiorCaracterer ();
console.log(maiorNome);

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let repeticao = [2, 3, 2, 5, 8, 2, 3];

function numeroMaisRepetido () {
  let numeroComMaisRepeticoes = [0];
  let checkContagem = 0;

  for (let index = 0; index < repeticao.length; index += 1) {
    let contador = 0
    for (let index2 = index + 1; index2 < repeticao.length; index2 += 1) {
      if (repeticao[index] === repeticao[index2]) {
        contador += 1;
      }  
    }

    if (contador > checkContagem) {
      checkContagem = contador;
      numeroComMaisRepeticoes = repeticao[index];
    }
  }

  return numeroComMaisRepeticoes;
}

numeroMaisRepetido ();
console.log('O numero que mais se repete é o', numeroMaisRepetido ());

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

let numNatural = 5

function somatoriaNumeros (numero) {
  let somatoria = 0;
  for ( let index = 1; index <= numero; index += 1) {
    somatoria += index
  }

  return somatoria;
}

let somatoria = somatoriaNumeros(numNatural);
console.log(somatoria);

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
