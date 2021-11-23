const saleService = require('../services/saleService');

const allSale = async (req, res) => {
  const sale = await saleService.allSale();
  return res.status(200).json(sale);
};

const saleCreate = async (req, res) => {
  const itensSold = req.body;
  const { err, statusCode, createSale } = await saleService.saleCreate(itensSold);
  if (err) return res.status(statusCode).json({ err });
  return res.status(200).json(createSale);
};

module.exports = {
  allSale,
  saleCreate,
};
