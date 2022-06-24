// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let formaGeometrica = 5;
let asteriscos = "*";
let concatenar = asteriscos.repeat(formaGeometrica);

for (index = 1 ; index <= formaGeometrica; index += 1) {
    console.log(concatenar);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let formaGeometrica2 = 5;
let asteriscos2 = "*";

for (index = 1 ; index <= formaGeometrica2; index += 1) {
    let concatenar = asteriscos2.repeat(index);
    console.log(concatenar);
}

// 3 - Agora inverta o lado do triângulo. Por exemplo:
let formaGeometrica3 = 5;
let asteriscos3 = "*";

let espacos3 = " ";
for (let index = 1 ; index <= formaGeometrica3; index += 1) {
    let repetirEspacos = espacos3.repeat(formaGeometrica3 - index)
    let concatenar = asteriscos3.repeat(index);
    console.log(repetirEspacos + concatenar);
}

// 4 - Depois, faça uma pirâmide com n asteriscos de base:
let formaGeometrica4 = 11;
let asteriscos4 = "*";

let espacos4 = " ";
for (let index = 1 ; index <= (Math.ceil(formaGeometrica4 /2)); index += 1) {
    let countEspaco;

    if (index == 1) {
        countEspaco = formaGeometrica4 / 2;
    } else {
        countEspaco = (formaGeometrica4 / 2) - (index -1);
    }
    
    if (index == 1) {
        countAsterico = 0;
    } else {
        countAsterico += 2;
    }

    let repetirEspacos = espacos4.repeat(countEspaco)
    let concatenar = asteriscos4.repeat(countAsterico);
    console.log(repetirEspacos + asteriscos4 + concatenar + repetirEspacos);
}

// 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:

let formaGeometrica5 = 7;
let asteriscos5 = "*";

let espacos5 = " ";

for (let index = 0; index < (Math.ceil(formaGeometrica5 /2)); index += 1){
    if (index == 0) {
        let countEspaco = formaGeometrica5 /2
        let repetirEspacos = espacos5.repeat(countEspaco)
        console.log(repetirEspacos + asteriscos5 + repetirEspacos);

    } else if (index == (Math.ceil(formaGeometrica5 /2)) -1) {
        let concatenar = asteriscos5.repeat(formaGeometrica5)
        console.log(concatenar);

    } else if (index == 1) {
        let countEspacoExterno = (formaGeometrica5 - 3) / 2;
        let repetirEspacoExterno = espacos5.repeat(countEspacoExterno)

        let countEspacoInterno = 0;
        if (index == 1) {
            countEspacoInterno = 1;
        } else {
            countEspacoInterno += 2;
        }

        repetirEspacoInterno = espacos5.repeat(countEspacoInterno)
        // repetirEspacos = espacos5.repeat(countEspaco)
        console.log(repetirEspacoExterno + asteriscos5 + espacos5 + asteriscos5 + repetirEspacoExterno);
    }
}


// 6 - Faça um programa que diz se um número definido numa variável é primo ou não.

let numeroEscolhido = 11;
let ehPrimo = false

for (let index = 2; index <= numeroEscolhido; index += 1) {
    let count = 0;
    for (let index2 = 2; index2 <= index; index2 +=1){
        if (index % index2 === 0){
            count += 1
        }
    }

    if ( count == 1) {
        ehPrimo = true;
    } else {
        ehPrimo = false;
    }
}

ehPrimo == true ? console.log("Sim! O número " + numeroEscolhido + " é primo.") : console.log("Não! O número " + numeroEscolhido + " não é primo.")

