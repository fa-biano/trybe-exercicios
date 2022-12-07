const readline = require('readline-sync');

const weightInKg = readline.questionFloat('What is your weight? (Kg) ');
const heightInMeters = readline.questionFloat('What is your height? (Meters) ');

const handeBMI = (weight, height) => {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
};

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

const calcBmiStatus = (bmi) => {
  const status  = Object.keys(BMI_MAX_AND_MIN);

  const findStatus = status.find((stat) => {
    const { minBMI, maxBMI } = BMI_MAX_AND_MIN[stat];
    const isMinBMI = minBMI ? bmi > minBMI : true;
    const isMaxBMI = maxBMI ? bmi < maxBMI : true;

    return isMinBMI && isMaxBMI;
  })

  return findStatus;
};

const main = () => {
  const bmi = handeBMI(weightInKg, heightInMeters).toFixed(2);
  const status = calcBmiStatus(bmi);


  console.log(`Your BMI(Body Mass Index) is ${bmi}. And Your BMI Status is ${status}.`);
}

main();
