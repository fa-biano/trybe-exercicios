import Person from './Person';

export default class Student extends Person {
  private _enrollment: string = '';
  private _examesGrades: number[] = [];
  private _assignmentsGrades: number[] = [];
 
  constructor(name:string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = this.generateEnrollment();
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    if (value.length < 16){
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres')
    }
    this._enrollment = value;
  }

  public get examesGrades(): number[] {
    return this._examesGrades;
  }
  public set examesGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas')
    }
    this._examesGrades = value;
  }

  public get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  public set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos')
    }
    this._assignmentsGrades = value;
  }

  private generateEnrollment(): string {
    // const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    const randomStr = String(Date.now());
    console.log('randomStr', randomStr);
    
    return `STU${randomStr}`
  }

  sumGrades(): { sum: number, divider: number } {
    const grades = [...this._examesGrades, ...this._assignmentsGrades];
    const sum = grades.reduce((acc, curr) => acc + curr);
    return { sum, divider: grades.length};
  }

  sumAverageGrade(): number {
    const { sum, divider } = this.sumGrades()
    return sum / divider;
  }

}