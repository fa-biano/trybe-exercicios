import Consumer from "./Consumer";
import Product from "./Product";
import Order from "./Order";

const consumer = new Consumer('Teste da Silva');

const sandwich = new Product('x-salada', 5.00);
const coca = new Product('coca zero', 3.00);
const dessert = new Product('sorvete', 2.00);

const order = new Order(consumer, [sandwich, coca, dessert], 'pix', 0.2);

console.log(order);
console.log('Custo total do Pedido: ', order.bill());
console.log('Custo do Pedido com desconto: ', order.billWithDiscount());






