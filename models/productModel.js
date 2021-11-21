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

module.exports = {
  allProducts,
  createProduct,
  productName,
};
