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
  const idProduct = await productService.productId(req.params.id);
  if (!idProduct) {
    return res.status(422).json({ err: {
      code: 'invalid_data',
      message: 'Wrong id format' } });
   }
  return res.status(200).json(idProduct);
};

const productUpdate = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const updateProduct = await productService.productUpdate(id, name, quantity);
  if (updateProduct.err) {
    return res.status(422).json(updateProduct);
  }
  return res.status(200).json({ id, name, quantity });
};

const productDelete = async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await productService.productDelete(id);
  if (!deleteProduct) {
    return res.status(422).json({ err: {
      code: 'invalid_data',
      message: 'Wrong id format' } });
   }
  return res.status(200).json(deleteProduct);
};

module.exports = {
  createProduct,
  allProducts,
  productId,
  productUpdate,
  productDelete,
};
