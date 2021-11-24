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
app.get('/sales', saleController.allSales);
app.get('/sales/:id', saleController.saleId);
app.put('/sales/:id', saleController.saleUpdate);
app.delete('/sales/:id', saleController.saleDelete);

app.listen(PORT, () => {
  console.log('Online em:', PORT);
});

/*  referencias - Durante o desevolvimento do trabalho foram consultados diversos repositórios para sanar dúvidas e decidir a melhor abordagem para o projeto, tendo ocorrido simples leitura de código - sendo os observados com mais detalhes:

Turma 10
-https://github.com/tryber/sd-010-a-store-manager/compare/giovanni-maldonado-project-store-maneger
-https://github.com/tryber/sd-010-a-store-manager/tree/rafael-fernandes-store_manager
-https://github.com/tryber/sd-010-a-store-manager/tree/Marcuscps19-project-store-manager
-https://github.com/tryber/sd-010-a-store-manager/tree/carol-vasconcelos-sd-010-a-store-manager

Turma 12
-https://github.com/tryber/sd-012-store-manager/tree/roberval-filho-project-store-manager
-https://github.com/tryber/sd-012-store-manager/tree/kevin-oliveira-store-manager */
