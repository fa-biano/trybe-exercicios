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

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3})
console.log(allLessons);

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

// 7 - Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto.

const getValueByNumber = (lesson, key) => Object.values(lesson)[key];

console.log(getValueByNumber(lesson1, 0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyPair = (lesson, key, value) => {
  const entries = Object.entries(lesson)
  let checkBoolean = false;
  for (const entry of entries) {
    if (entry[0] === key && entry[1] === value){
      checkBoolean = true
    }
  }
  return checkBoolean;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));

// Bônus:
// 1 - 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

// let totalMathStudantes = 0;
// for (const lesson in allLessons) {
//   let entry = Object.entries(allLessons[lesson])
//   let checkMatematica
//   for (let index = 0; index < entry.length; index += 1) {
//     if (entry[index][0] === 'materia' && entry[index][1] === 'Matemática') {
//       checkMatematica = true
//     }

//     if (checkMatematica === true) {
//       if(entry[index][0] === 'numeroEstudantes') {
//         let mathStudantes = entry[index][1]
//         totalMathStudantes += mathStudantes
//       }
//     }
//   }
// }
// console.log(totalMathStudantes);

// let totalMathStudantes = 0
// for (const lesson in allLessons) {
//   if (allLessons[lesson].materia === 'Matemática') {
//     const teste = allLessons[lesson].numeroEstudantes
//     totalMathStudantes += teste
//   }
// }
// console.log(totalMathStudantes);

const verifyMathStudants = () => {
  let totalMathStudantes = 0
  for (const lesson in allLessons) {
    if (allLessons[lesson].materia === 'Matemática') {
      const mathStudants = allLessons[lesson].numeroEstudantes
      totalMathStudantes += mathStudants
    }
  }
  return totalMathStudantes
}

console.log(verifyMathStudants());

// 2 - 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const createReport = (object, teacher) => {
  let report = {
    professor: teacher,
    aulas: [],
    estudantes: 0,
  }

  let totalStudant = 0
  for (const lesson in object) {
    if (object[lesson].professor === teacher) {
      report.aulas.push(object[lesson].materia)
      let studants = object[lesson].numeroEstudantes
      totalStudant += studants
    }
    report.estudantes = totalStudant
  }
  return report
}

console.log(createReport(allLessons, 'Maria Clara'))