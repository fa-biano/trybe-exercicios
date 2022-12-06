const weightInKg = 100;
const heightInCm = 175;

const handeBMI = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
};

const main = () => {
  const bmi = handeBMI(weightInKg, heightInCm).toFixed(2);
  console.log(bmi);
}

main();

