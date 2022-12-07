const readline = require('readline-sync');

const weightInKg = readline.questionInt('What is your weight? (Kg) ');
const heightInMeters = readline.questionFloat('What is your height? (Meters) ');

const handeBMI = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
};

const main = () => {
  const bmi = handeBMI(weightInKg, heightInMeters).toFixed(2);
  console.log(`Your BMI(Body Mass Index) is ${bmi}`);
}

main();
