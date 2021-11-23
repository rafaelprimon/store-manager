const saleService = require('../services/saleService');

const saleCreate = async (req, res) => {
  const itensSold = req.body;
  const { err, statusCode, createSale } = await saleService.saleCreate(itensSold);
  if (err) return res.status(statusCode).json({ err });
  return res.status(200).json(createSale);
};

const allSales = async (_req, res) => {
  const sale = await saleService.allSales();
  return res.status(200).json({ sales: sale });
};

const saleId = async (req, res) => {
  const { id } = req.params;
  const idSale = await saleService.saleId(id);
  if (!idSale) {
    return res.status(404).json({ err: { code: 'not_found', message: 'Sale not found' } });
  }
  return res.status(200).json(idSale);
};

module.exports = {
  allSales,
  saleCreate,
  saleId,
};
