import Consumer from "./Consumer";
import Product from "./Product";

export default class Order {
  private _consumer: Consumer;
  private _products: Product[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;

  constructor(consumer: Consumer, products:Product[], paymentMethod: string, discount: number) {
    this._consumer = consumer;
    this.products = products;
    this._paymentMethod = paymentMethod;
    this.discount = discount;
  }

  public get consumer(): Consumer {
    return this._consumer;
  }
  public set consumer(value: Consumer) {
    this._consumer = value;
  }

  public get products(): Product[] {
    return this._products;
  }
  public set products(value: Product[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos 1 produto')
    }

    this._products = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get discount(): number {
    return this._discount;
  }
  public set discount(value: number) {
    if (value <= 0) {
      throw new Error('O valor do desconto precisa ser maior que zero');
    }

    this._discount = value;
  }

  bill() {
    const products = [...this._products];
    const prices = products.map((product) => product.price);
    const sumPrices = prices.reduce((acc, curr) => acc + curr);
    return sumPrices;
  }

  billWithDiscount() {
    const discount = this._discount;
    const bill = this.bill();
    const discountedBill = bill - (bill * discount);
    return discountedBill;
  }
}