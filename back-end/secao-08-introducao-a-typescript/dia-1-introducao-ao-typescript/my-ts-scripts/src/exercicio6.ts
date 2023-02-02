const cubicMeterUnits = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];

const convertCubicMeters = (value: number, fromUnit: string, toUnit:string): number => {
  const fromIndex = cubicMeterUnits.indexOf(fromUnit);
  const toIndex = cubicMeterUnits.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(1000, (exponent));
};

console.log(convertCubicMeters(1, 'km3', 'm3'));