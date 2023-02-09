const squareMeterUnits = ['km2', 'hm2', 'dam2', 'm2', 'dm2', 'cm2', 'mm2'];

const convertSquareMeters = (value: number, fromUnit: string, toUnit:string): number => {
  const fromIndex = squareMeterUnits.indexOf(fromUnit);
  const toIndex = squareMeterUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(100, (exponent));
};

console.log(convertSquareMeters(1, 'km2', 'm2'));