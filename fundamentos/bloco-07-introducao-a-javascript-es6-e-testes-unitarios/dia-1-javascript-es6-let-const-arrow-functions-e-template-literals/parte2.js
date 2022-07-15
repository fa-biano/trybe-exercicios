// 1 - Crie uma função que receba um número e retorne seu fatorial.

const calcFatorial = (num) => {
  let result = 1
  for (let index = 1; index <= num; index += 1) {
    result *= index;
  }
  return result
}

console.log(calcFatorial(6));