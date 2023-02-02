import * as readline from 'readline-sync';

const lengthUnits2 = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const interactiveConvertLength = (value: number, fromUnit: string, toUnit:string): number => {
  const fromIndex = lengthUnits2.indexOf(fromUnit);
  const toIndex = lengthUnits2.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
};

const exec = () => {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');
  const fromUnitChoiceIndex = readline.keyInSelect(lengthUnits2, 'Escolha um número para a unidade base:');
  const toUnitChoiceIndex = readline.keyInSelect(lengthUnits2, 'Escolha um número para a unidade base:');

  const toUnitChoice = lengthUnits2[toUnitChoiceIndex];
  const fromUnitChoice = lengthUnits2[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }

  const result = interactiveConvertLength(value, fromUnitChoice, toUnitChoice);
  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
};

exec();
