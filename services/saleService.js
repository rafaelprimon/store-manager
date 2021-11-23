const saleModel = require('../models/saleModel');

const firstRule = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
  statusCode: 422,
};

const allSale = async () => {
  const sales = await saleModel.allSale();
  return sales;
};

const minItem = 1;

const saleCreate = async (itensSold) => {
  const [{ quantity }] = itensSold;
  if (quantity < minItem) {
    return firstRule;
  }
  if (typeof (quantity) === 'string') {
    return firstRule;
  }
  const createSale = await saleModel.saleCreate(itensSold);
  return { createSale };
};

module.exports = {
  allSale,
  saleCreate,
};
