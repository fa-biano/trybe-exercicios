import Person from "./classes/Person";
import Student from './classes/Student';
import Subject from './classes/Subject';
import Teacher from './classes/Teacher';

const erza = new Person('Erza', new Date('1990/11/02'));
const natsu = new Person('Natsu', new Date('2000/11/02'));

console.log(erza);
console.log(natsu);

const student1 = new Student('Erza', new Date('1990/11/02'));
student1.examesGrades = [5, 6];
student1.assignmentsGrades = [8, 7];

console.log(student1);
console.log(`A média das notas de ${student1.name} é: ${student1.sumAverageGrade()}`);

const matematica = new Subject('Matematica');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');

console.log(matematica, historia, filosofia);

const salvador = new Teacher('Salvador', new Date('1975/01/01'), 4000, matematica);
console.log(salvador);

 
