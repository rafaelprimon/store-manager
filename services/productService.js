const productModel = require('../models/productModel');

const firstRule = {
  err: {
    code: 'invalid_data',
    message: '"name" length must be at least 5 characters long',
  },
  statusCode: 422,
};

const secondRule = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be larger than or equal to 1',
  },
  statusCode: 422,
};

const thirdRule = {
  err: {
    code: 'invalid_data',
    message: '"quantity" must be a number',
  },
  statusCode: 422,
};

const fourthRule = {
  err: {
    code: 'invalid_data',
    message: 'Product already exists',
  },
  statusCode: 422,
};

const sixthRule = {
  err: {
    code: 'invalid_data',
    message: 'Wrong id format',
  },
  statusCode: 422,
};

const minName = 5;

const createProduct = async (name, quantity) => {
  if (name.length < minName) {
    return firstRule;
  }
  if (quantity <= 0) {
    return secondRule;
  }
  if (typeof (quantity) !== 'number') {
    return thirdRule;
  }

  const productAlreadyExists = await productModel.productName(name);
  if (productAlreadyExists) {
    return fourthRule;
  }
  return productModel.createProduct(name, quantity);
};

const allProducts = async () => {
  const productAll = await productModel.allProducts();
  return productAll;
};

const productId = async (id) => {
  if (!id) {
    return sixthRule;
  }
  const idProduct = await productModel.productId(id);
  return idProduct;
};

const productUpdate = async (id, name, quantity) => {
  if (name.length < minName) {
    return firstRule;
  }
  if (quantity <= 0) {
    return secondRule;
  }
  if (typeof (quantity) !== 'number') {
    return thirdRule;
  }

  const updateProduct = await productModel.productUpdate(id, name, quantity);
  return updateProduct;
};

const productDelete = async (id) => {
  if (!id) {
    return sixthRule;
  }
  const deleteProduct = await productModel.productDelete(id);
  return deleteProduct;
};

module.exports = {
  createProduct,
  allProducts,
  productId,
  productUpdate,
  productDelete,
};
