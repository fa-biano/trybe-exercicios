let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let number of numbers) {
    console.log(number);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
    resultado = resultado + numbers[index];
}

console.log(resultado);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaResultado = resultado / numbers.length
console.log(mediaResultado);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (mediaResultado > 20) {
    console.log("Mensagem: valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumeroDoArray = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumeroDoArray){
        maiorNumeroDoArray = numbers[index]
    }
}

console.log("O maior número do array é:", maiorNumeroDoArray);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let qtdImpar = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 === 1){
        qtdImpar += 1;
    }
}

console.log("Total de", qtdImpar, "numeros impares");

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menorNumeroDoArray = maiorNumeroDoArray

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumeroDoArray){
        menorNumeroDoArray = numbers[index]
    }
}

console.log("O menor número do array é:", menorNumeroDoArray);

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let novoArray = [];

for (let index = 1; index <= 25; index += 1) {
    novoArray.push(index);
}

console.log(novoArray);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 0; index < novoArray.length; index += 1) {
    console.log(novoArray[index] / 2);
}
