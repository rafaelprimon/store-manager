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

const saleUpdate = async (id, itensSold) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const updateSale = await db.collection('sales').updateOne(
   { id: ObjectId(id) },
   { $set: { itensSold } },
);
  return ({ updateSale });
};

const saleDelete = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const deleteSale = await db.collection('sales').findOneAndDelete({ _id: ObjectId(id) });
  return deleteSale;
};

module.exports = {
  saleCreate,
  allSales,
  saleId,
  saleUpdate,
  saleDelete,
};
