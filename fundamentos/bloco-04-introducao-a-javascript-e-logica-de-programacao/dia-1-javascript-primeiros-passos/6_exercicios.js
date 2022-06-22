// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados

const a = 10;
const b = 12;

let adicao = a + b;
console.log(adicao);

let subtracao = a - b;
console.log(subtracao);

let multiplicacao = a * b;
console.log(multiplicacao);

let divisao = a / b;
console.log(divisao);

let modulo = a % b;
console.log(modulo);

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if ( a > b) {
    console.log(a);
} else {
    console.log(b);
}

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const n1 = 25;
const n2 = 15;
const n3 = 20;

if (n1 > n2 && n1 > n3) {
    console.log(n1);
} else if (n2 > n1 && n2 > n3) {
    console.log(n2);
} else {
    console.log(n3);
}

// 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const isPositive = -10;

if (isPositive > 0) {
    console.log("positive");
} else if (isPositive < 0) {
    console.log("negative");
} else {
    console.log("zero");
}

// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angle1 = 158;
const angle2 = 20;
const angle3 = 1;

let isTriangle = "";

if (angle1 < 0 || angle2 < 0 || angle3 < 0) {
    console.log("Erro: valores negativos são inválidos");
} else if ( angle1 + angle2 + angle3 === 180) {
    isTriangle = true;
    console.log(isTriangle);
} else {
    isTriangle = false;
    console.log(isTriangle);
}

// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 let xadrez = "RAINHA"
 let convertLowerCase = xadrez.toLowerCase();

 console.log(convertLowerCase);

 switch (convertLowerCase) {
    case "bispo":
        console.log("Movimento: diagonais");
        break;
        
    case "torre":
        console.log("Movimento: vertical ou horizontal");
        break;

    case "cavalo":
        console.log("Movimento: em formato de L");
        break;

    case "rainha":
        console.log("Movimento: livre");
        break;

    default:
        console.log("Peça informada não cadastrada ou não existe");
 }

// 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 41;
let conceito = "";

if (nota > 100 || nota < 0) {
    conceito = "Erro: Nota Inválida";
} else if (nota >= 90) {
    conceito = "A";
} else if (nota >= 80) {
    conceito = "B";
} else if (nota >= 70) {
    conceito = "C";
} else if (nota >= 60) {
    conceito = "D";
} else if (nota >= 50) {
    conceito = "E";
} else {
    conceito = "F";
} 

console.log(conceito);

// 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false

const num1 = 2;
const num2 = 3;
const num3 = 5;

let isEven = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    isEven = true
}

console.log(isEven);

// 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.

const num4 = 2;
const num5 = 3;
const num6 = 6;

let isOdd = false;

if (num4 % 2 === 1 || num5 % 2 === 1 || num6 % 2 === 1) {
    isOdd = true
}

console.log(isOdd);

// 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto

// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custoProduto = 10;
const valorVendaProduto = 50;
const qtdVendida = 1000;

let lucro = 0;

let custoProdutoComImposto = custoProduto * 1.2;
let valorCustoTotal = custoProdutoComImposto * qtdVendida;
let valorTotalVendido = valorVendaProduto * qtdVendida;

if (custoProduto < 0 || valorVendaProduto < 0 || qtdVendida < 0) {
    lucro = "Erro: valores de entrada menores que zero"
} else {
    lucro = valorTotalVendido - valorCustoTotal
}

console.log(lucro);

// 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

const salarioBruto = 3000;

let aliquotaInss = 0.08;
let descontoInss = 0;

if (salarioBruto < 0) {
    aliquotaInss = false;
} else if (salarioBruto <= 1556.94) {
    aliquotaInss = 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaInss = 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaInss = 0.11;
} else {
    aliquotaInss = 0;
    descontoInss = 570.88;
}

if (descontoInss === 0) {
    descontoInss = salarioBruto * aliquotaInss;
}

console.log("Aliquota INSS: ", aliquotaInss);
console.log("Desconto INSS: ", descontoInss);

let salarioDescontadoInss = salarioBruto - descontoInss;
console.log("Salario após desconto INSS: ", salarioDescontadoInss);

let descontoImpostoDeRenda = 0
let aliquotaImpostoDeRenda = 0
let parcelaADeduzir = 0

if (salarioDescontadoInss <= 1903.98) {
    aliquotaImpostoDeRenda = 0;
} else if (salarioDescontadoInss <= 2826.65) {
    aliquotaImpostoDeRenda = 0.075;
    parcelaADeduzir = 142.8
} else if (salarioDescontadoInss <= 3751.05) {
    aliquotaImpostoDeRenda = 0.15;
    parcelaADeduzir = 354.8
} else if (salarioDescontadoInss <= 4664.68) {
    aliquotaImpostoDeRenda = 0.225;
    parcelaADeduzir = 636.13
} else {
    aliquotaImpostoDeRenda = 0.275;
    parcelaADeduzir = 869.36
}

console.log("Aliquota IR: ", aliquotaImpostoDeRenda);
console.log("Parcela a Deduzir: ", parcelaADeduzir);

descontoImpostoDeRenda = (salarioDescontadoInss * aliquotaImpostoDeRenda) - parcelaADeduzir
console.log("Valor descontado no IR: ", descontoImpostoDeRenda);

let salarioLiquido = 0

if (aliquotaInss === false) {
    salarioLiquido = "Erro - Salario Bruto informado é menor que zero"
} else {
    salarioLiquido = salarioDescontadoInss - descontoImpostoDeRenda
}

console.log("Salario Liquido: ", salarioLiquido);