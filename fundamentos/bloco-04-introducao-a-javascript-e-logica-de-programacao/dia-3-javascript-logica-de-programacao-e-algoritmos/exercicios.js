// 1 - crie um algoritmo que retorne o fatorial de 10

let fatorial = 10;
let resultadoFatorial = 1

for (let index = 2; index <= fatorial; index += 1) {
    resultadoFatorial *= index;
}

console.log(resultadoFatorial);

// 2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'trybe';
let arrayWord = [];

for (let index = 0; index < word.length; index += 1) {
    arrayWord.push(word[index]);
}

let arrayInverter = arrayWord.reverse();
let wordInverter = "";

for (let index = 0; index < arrayInverter.length; index += 1) {
    wordInverter += arrayInverter[index]
}
console.log(wordInverter);

// 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 0; index < array.length ; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index];
    }
}

for (let index = 0; index < array.length ; index += 1) {
    if (menorPalavra.length > array[index].length) {
        menorPalavra = array[index];
    }
}

console.log("Maior palavra do array é: " + maiorPalavra);
console.log("Menor palavra do array é: " + menorPalavra);

// 4 - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let maiorNumeroPrimo = 0;

for (let index = 2; index <= 50; index += 1) {
    let count = 0;
    for (let index2 = 2; index2 <= index; index2 +=1){
        if (index % index2 === 0){
            count += 1
        }
    }

    let checkMaiorNum;
    if (count == 1) {
        checkMaiorNum = index; 
    }

    if (checkMaiorNum > maiorNumeroPrimo) {
        maiorNumeroPrimo = checkMaiorNum;
    }
}

console.log("Maior número primo de 2 a 50 é " + maiorNumeroPrimo);
