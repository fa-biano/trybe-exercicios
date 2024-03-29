const capacityUnits = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

const convertCapacity = (value: number, fromUnit: string, toUnit:string): number => {
  const fromIndex = capacityUnits.indexOf(fromUnit);
  const toIndex = capacityUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
};

console.log(convertCapacity(1, 'kl', 'l'));