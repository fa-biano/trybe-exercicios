export default class Product {
  private _name: string = '';
  private _price: number = 1;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  
  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.')
    }
    
    this._name = value;
  }

  public get price(): number {
    return this._price;
  }

  public set price(value: number) {
    if (value <= 0) {
      throw new Error('O valor do produto deve ser maior que zero')
    }

    this._price = value;
  }

}