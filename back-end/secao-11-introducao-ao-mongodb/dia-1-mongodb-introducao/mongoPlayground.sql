-- comandos para o mongoDB

-- use database sample
use('sample');

-- cria collection products e inseri dados
// db.products.insertMany([
//     { "productName": "Lapis", "stock": 10, "price": 20,"status":"A"},
//     { "productName": "Tesoura", "price": 5, "status": "B" },
//     { "productName": "Borracha", "price": 15, "status": "A" }
// ]);

// db.products.find();
// db.products.findOne({ productName: 'Caixa' }, { _id: 0 });

// db.fruits.insertMany([
//   { "_id": "apples", "qty": 5 },
//   { "_id": "bananas", "qty": 7 },
//   { "_id": "oranges", "qty": { "in stock": 8, "ordered": 12 } },
//   { "_id": "avocados", "qty": "fourteen" },
// ]);

// db.fruits.find({ qty: { $gt: 4 } } );
-- //        gt = greater than

db.products.find().limit(2);

db.products.countDocuments();

db.products.find().skip(3);