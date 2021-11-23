const { ObjectId } = require('mongodb');
const connection = require('./connection');

const saleCreate = async (itensSold) => {
  const db = await connection();
  const createSale = await db.collection('sales').insertMany([{ itensSold }]);
  return { _id: Object.values(createSale.insertedIds).toString(), itensSold };
};

const allSales = async () => {
  const db = await connection();
  const sale = await db.collection('sales').find().toArray();
  return sale;
};

const saleId = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const idSale = await db.collection('sales').findOne({ _id: ObjectId(id) });
  return idSale;
};

module.exports = {
  saleCreate,
  allSales,
  saleId,
};
