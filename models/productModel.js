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

const productUpdate = async (id, name, quantity) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const updateProduct = await db.collection('products').updateOne(
    { _id: ObjectId(id) },
    { $set: { name, quantity } },
  );
  return updateProduct;
};

const productDelete = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const db = await connection();
  const deleteProduct = await db.collection('products').deleteOne({ _id: ObjectId(id) });
  return deleteProduct;
};

module.exports = {
  allProducts,
  createProduct,
  productName,
  productId,
  productUpdate,
  productDelete,
};
