const saleModel = require('../models/saleModel');

const firstRule = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
  statusCode: 422,
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

const allSales = async () => {
  const sale = await saleModel.allSales();
  return sale;
};

const saleId = async (id) => {
  const idSale = await saleModel.saleId(id);
  return idSale;
};

module.exports = {
  saleCreate,
  allSales,
  saleId,
};
