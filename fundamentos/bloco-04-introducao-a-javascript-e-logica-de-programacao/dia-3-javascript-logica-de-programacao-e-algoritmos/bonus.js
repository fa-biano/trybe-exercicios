// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let formaGeometrica = 5;
let asteriscos = "*";
// let concatenar = asteriscos.repeat(formaGeometrica);

// for (index = 1 ; index <= formaGeometrica; index += 1) {
//     console.log(concatenar);
// }

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:


// for (index = 1 ; index <= formaGeometrica; index += 1) {
//     let concatenar = asteriscos.repeat(index);
//     console.log(concatenar);
// }

// 3 - Agora inverta o lado do triângulo. Por exemplo:

let espacos = " ";
for (index = 1 ; index <= formaGeometrica; index += 1) {
    let repetirEspacos = espacos.repeat(formaGeometrica - index)
    let concatenar = asteriscos.repeat(index);
    console.log(repetirEspacos + concatenar);
}