const productService = require('../services/productService');

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const product = await productService.createProduct(name, quantity);
  if (product.err) {
    return res.status(422).json(product);
  }
  res.status(201).json(product);
};

const allProducts = async (_req, res) => {
  const productAll = await productService.allProducts();
  res.status(200).json({ products: productAll });
};

const productId = async (req, res) => {
  const { id } = req.params;
  const idProduct = await productService.productId(id);
  if (idProduct.err) {
    return res.status(422).json(idProduct);
  }
  return res.status(200).json(idProduct);
};

module.exports = {
  createProduct,
  allProducts,
  productId,
};
