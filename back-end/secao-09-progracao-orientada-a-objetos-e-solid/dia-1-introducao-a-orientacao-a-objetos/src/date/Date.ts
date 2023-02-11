export default class DateClass {
  private _day: number = 1;
  private _month: number = 1;
  private _year: number = 1900;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  public get day(): number {
    return this._day;
  }
  public set day(value: number) {
    if (value < 1 || value > 31) {
      throw new Error('Dias precisam ser um numero entre 1 e 31');
    }

    this._day = value;
  }

  public get month(): number {
    return this._month;
  }
  public set month(value: number) {
    if (value < 1 || value > 12) {
      throw new Error('Meses precisam ser um numero entre 1 e 12');
    }
    
    this._month = value;
  }

  public get year(): number {
    return this._year;
  }
  public set year(value: number) {
    if (value < 1) {
      throw new Error('Anos precisam ser um numero maior que zero');
    }
    
    this._year = value;
  }

  getMonthName(): string {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const selectMonth = this._month - 1;
    return months[selectMonth];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  compareDates(date: DateClass): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;

    const dateStr = `${date.year}-${date.month}-${date.day}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }
}

const testDate = new DateClass(1, 12, 2032);
console.log(testDate);
console.log('Nome do mês: ', testDate.getMonthName());
console.log('É ano bissexto: ', testDate.isLeapYear());

const otherDate = new DateClass(30, 1, 2021);
const compared = testDate.compareDates(otherDate);
const compareStates = ['anterior', 'igual', 'posterior'];
console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);
