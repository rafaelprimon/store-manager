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

const createProduct = async (name, quantity) => {
  if (name.lenght <= 5) {
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

module.exports = {
  createProduct,
};
