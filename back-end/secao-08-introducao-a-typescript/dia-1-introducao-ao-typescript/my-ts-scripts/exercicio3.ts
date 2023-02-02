const massUnits = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

const convertMass = (value: number, fromUnit: string, toUnit:string): number => {
  const fromIndex = massUnits.indexOf(fromUnit);
  const toIndex = massUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent);
};

console.log(convertMass(1, 'kg', 'g'));
