export default class Person {
  // private _name: string = String();
  // private _birthDate: Date;
  
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const birthYear = value.getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

  private validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo três caracteres')
    }
  }

  private validateBirthDate(value: Date): void {
    if (value.getFullYear() > new Date().getFullYear()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.')
    }

    if (Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos..') 
    }
  }
}