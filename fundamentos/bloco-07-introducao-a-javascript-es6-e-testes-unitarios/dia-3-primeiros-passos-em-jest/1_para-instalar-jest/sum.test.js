const {sum, myRemove, myFizzBuzz, encode, decode} = require('./sum');

describe('Testes da função sum:', () => {
  test('avalia sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('avalia sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('avalia se sum() lança erro se o parametro for string', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });

  test('se parametro for !== number, avalia a msg de erro', () => {
    expect(() => { sum(4, '5') }).toThrowError(new Error('parameters must be numbers'))
  });
})

describe('Testes da função myRemove:', () => {
  test('verifica se myRemove([1, 2, 3, 4], 3) retorna o array sem o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test('verifica se myRemove([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test('verifica se myRemove([1, 2, 3, 4], 5) retorna [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
})

describe('Testes da função myFizzBuzz: ', () => {
  test('verifica se myFizzBuss(15) é divisivel por 3 e 5 (fizzbuzz)', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  test('verifica se myFizzBuss(9) é divisivel por 3 (fizz)', () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });

  test('verifica se myFizzBuss(10) é divisivel por 5 (buzz)', () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });

  test('verifica se myFizzBuss(7) é divisivel por 3 e 5 (7)', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });

  test('verifica se myFizzBuss(a) é divisivel por 3 e 5 (false)', () => {
    expect(myFizzBuzz('a')).toBeFalsy();
  });
})

describe('Testes das funções encode e decode ', () => {
  test('verifica se enconde é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  test('verifica se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  test('verifica se enconde transforma as vogais aeiou em 12345', () => {
    expect(encode('aeiou')).toBe('12345');
  });

  test('verifica se decode transforma os numeros 12345 em aeiou', () => {
    expect(decode('12345')).toBe('aeiou');
  });

  test('verifica se enconde transforma outras letras', () => {
    expect(encode('fgh')).toBe('fgh');
  });

  test('verifica se decode transforma outros numeros', () => {
    expect(decode('678')).toBe('678');
  });

  test('verifica se o parametro de enconde é igual ao tamanho do retorno', () => {
    expect(encode('fgh').length).toEqual(3);
  });

  test('verifica se o parametro de decode é igual ao tamanho do retorno', () => {
    expect(decode('678').length).toEqual(3);
  });
})