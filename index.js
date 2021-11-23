const express = require('express');
const bodyParser = require('body-parser');
const productController = require('./controllers/productController');
const saleController = require('./controllers/saleController');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.post('/products', productController.createProduct);
app.get('/products', productController.allProducts);
app.get('/products/:id', productController.productId);
app.put('/products/:id', productController.productUpdate);
app.delete('/products/:id', productController.productDelete);

app.post('/sales', saleController.saleCreate);
app.get('./sales', saleController.allSale);

app.listen(PORT, () => {
  console.log('Online em:', PORT);
});
