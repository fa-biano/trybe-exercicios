// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

let romanos = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

let checkDecimais = [];

function romanos2decimais(string) {
  for (let index = 0; index < string.length; index += 1) {
    for (let key in romanos) {
      if (key === string[index]) {
        // console.log(string[index]);
        // console.log(romanos[key]);
        checkDecimais.push(romanos[key]);
      }
    }
  }

  return checkDecimais;
}

function somaTransformadosEmDecimais() {
  let ultimoArray = (checkDecimais.length - 1);
  let numeroAtual = 0;

  for (let index = ultimoArray; index >= 0; index -= 1) {
    // console.log(checkDecimais[index]);
    if (numeroAtual > checkDecimais[index]) {
      numeroAtual -= checkDecimais[index]
    } else {
      numeroAtual += checkDecimais[index]
    }
  }
  console.log(numeroAtual);
}

romanos2decimais('CDXCIX');
somaTransformadosEmDecimais();

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];
let vectorEven = [];

for (let index = 0; index < vector.length; index += 1) {
  for (let index2 = 0; index2 < vector[index].length; index2 += 1) {
    if (vector[index][index2] % 2 === 0) {
      vectorEven.push(vector[index][index2])
    }
  }
}

console.log(vectorEven);

// 🚀 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

let tipoFrutas = {};
for (let index = 0; index < basket.length; index += 1) {
  let fruta = basket[index]
  if (!tipoFrutas[fruta]) {
    tipoFrutas[fruta] = 1;
  } else {
    tipoFrutas[fruta] += 1
  }
}

// console.log(tipoFrutas);

let mensagemFinal = [];
for (fruta in tipoFrutas) {
  let mensagem = `${tipoFrutas[fruta]} ${fruta}`
  if (tipoFrutas[fruta] > 1) {
    mensagem += 's'
  }
  mensagemFinal.push(mensagem);
}

console.log(`Sua cesta possui ${mensagemFinal.join(', ')}`);

// 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradorFoco = moradores.blocoDois[1];

console.log(`O morador do bloco 2 de nome ${moradorFoco.nome} ${moradorFoco.sobrenome} mora no ${moradorFoco.andar}º andar, apartamento ${moradorFoco.apartamento}.`);

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome, depois faça o mesmo para os moradores do bloco 2.


for (index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(`Bloco 1: ${moradores.blocoUm[index].nome} ${moradores.blocoUm[index].sobrenome}`);
}

for (index = 0; index < moradores.blocoDois.length; index += 1) {
  console.log(`Bloco 2: ${moradores.blocoDois[index].nome} ${moradores.blocoDois[index].sobrenome}`);
}
