// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.
const register = (name) => {
  const setEmail = name.replace(/ /g, '_').toLowerCase();
  const newRegister = {nomeCompleto: name, email: `${setEmail}@trybe.com`,};
  return newRegister;
};

const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(register));

// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const numPrize = () => Math.ceil(Math.random() * 5);

const matchPrize = (func, num) => {
  const prize = func();
  return num === prize ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(matchPrize(numPrize, 5));

// 3 - Crie uma HOF que receberá três parâmetros:
// O primeiro será um array de respostas corretas (Gabarito);
// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;
// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso essa função usará os seguintes critérios:
// Uma resposta correta adiciona 1 ponto à pontuação final;
// A ausência de uma resposta não altera a pontuação (quando for "N.A");
// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.
// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswer = (correctAnswer, inpuntAnswer) => {
  if (correctAnswer.length === inpuntAnswer.length) {
    let score = 0;
    for (let index = 0; index < correctAnswer.length; index += 1) {
      if (inpuntAnswer[index] === correctAnswer[index]) {
        score += 1;
      } else if (inpuntAnswer[index] === 'N.A') {
        score += 0;
      } else {
        score -= 0.5;
      }
    }
    return (score >= 0) ? score : 0;
  }
}

const answerRate = (correctAnswer, inpuntAnswer, analyzer) => analyzer(correctAnswer, inpuntAnswer);

console.log(answerRate(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));