const { ObjectId } = require('mongodb');
const connection = require('./connection');

const allProducts = async () => {
  const db = await connection();
  const product = await db.collection('products').find({}).toArray();
  return product;
};

const createProduct = async (name, quantity) => {
  const db = await connection();
  const newProduct = await db.collection('products').insertOne({ name, quantity });
  return { _id: newProduct.insertedId, name, quantity };
};

const productName = async (name) => {
  const db = await connection();
  const nameProduct = await db.collection('products').findOne({ name });
  return nameProduct;
};

const productId = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const idProduct = await db.collection('products').findOne({ _id: ObjectId(id) });
  return idProduct;
};

module.exports = {
  allProducts,
  createProduct,
  productName,
  productId,
};
