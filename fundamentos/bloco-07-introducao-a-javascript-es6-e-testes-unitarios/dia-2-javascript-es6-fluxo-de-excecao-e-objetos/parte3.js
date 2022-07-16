const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addTurnoNoite = (object, key, value) => {
  object[key] = value
}

addTurnoNoite (lesson2, 'turno', 'noite')
console.log(lesson2);

// 2 -Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => {
  const objectKeys = Object.keys(object);
  console.log(objectKeys);
}

listKeys(lesson2);

// 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const checkObjectLength = (object) => {
  const objectLenght = Object.keys(object).length;
  console.log(objectLenght);
}

checkObjectLength(lesson2);

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (object) => {
  const objectValues = Object.values(object);
  console.log(objectValues);
}

listValues(lesson2);

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = {}
allLessons.lesson1 = lesson1;
allLessons.lesson2 = lesson2;
allLessons.lesson3 = lesson3;

console.log(allLessons);

// const teste = Object.assign({}, Object.entries(lesson1), Object.entries(lesson2))
// console.log(teste);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumStudants = () => {
  let allStudants = 0;
  for (const key in allLessons) {
    let qtyStudants
    for (const value in allLessons[key]) {
      if (value === 'numeroEstudantes') {
        qtyStudants = allLessons[key][value];
        allStudants += qtyStudants;
      }
    }
  }
  console.log(allStudants);
}

sumStudants();

// 7 - Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

