const connection = require('./connection');

const allSale = async () => {
  const db = await connection();
  const sales = await db.collection('sales').find().toArray();
  return sales;
};

const saleCreate = async (itensSold) => {
  const db = await connection();
  const createSale = await db.collection('sales').insertMany([{ itensSold }]);
  return { _id: Object.values(createSale.insertedIds).toString(), itensSold };
};

module.exports = {
  allSale,
  saleCreate,
};
