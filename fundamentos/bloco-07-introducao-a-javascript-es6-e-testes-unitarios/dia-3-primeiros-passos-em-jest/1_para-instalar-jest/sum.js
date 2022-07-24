const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error ('parameters must be numbers');
  } else {
    return a + b;
  }
}

const myRemove = (arr, item) => {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index])
    }
  }
  return newArr;
}

const myFizzBuzz = (num) => {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num
}

const encode = (string) => {
  let transform = [];

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      transform.push(1);
    } else if (string[index] === 'e') {
      transform.push(2);
    } else if (string[index] === 'i') {
      transform.push(3);
    } else if (string[index] === 'o') {
      transform.push(4);
    } else if (string[index] === 'u') {
      transform.push(5);
    } else {
      transform.push(string[index]);
    }
  }

  let finalEncode = transform.join('');
  return finalEncode;
}

const decode = (code) => {
  let transform = [];

  for (let index = 0; index < code.length; index += 1) {
    if (code[index] == 1) {
      transform.push('a');
    } else if (code[index] == 2) {
      transform.push('e');
    } else if (code[index] == 3) {
      transform.push('i');
    } else if (code[index] == 4) {
      transform.push('o');
    } else if (code[index] == 5) {
      transform.push('u');
    } else {
      transform.push(code[index]);
    }
  }

  let finalDecode = transform.join('');
  return finalDecode;
}

const techList = (tech, person) => {
  tech.sort();
  let ordererList = [];

  if (tech.length === 0) {
    ordererList = 'Vazio!';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      ordererList.push({
        tech: tech[index],
        name: person,
      });
    }
  }
  return ordererList;
}

const hydrate = (drinks) => {
  let qtyWater = drinks.match(/\d+/g);
  let sum = 0;
  let toNumber = 0;

  for (let index = 0; index < qtyWater.length; index += 1) {
    toNumber = parseInt(qtyWater[index]);
    sum += toNumber;
  }

  let recomendation;
  if (sum > 1) {
    recomendation = sum + ' copos de água';
  } else {
    recomendation = sum + ' copo de água';
  }

  return recomendation;
}

module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};