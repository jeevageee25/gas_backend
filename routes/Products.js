var express = require('express');
var router = express.Router();
var { ProductsController } = require('../controllers').ProductsController;
const middleware = require('../middleware/jwtHandler');
const validator = require('../middleware/SchemaValidator')
const schemas = require('../schemas').Products;
const controller = new ProductsController();
 
router.post('/products/search', validator(schemas.searchProducts, 'body'),
    controller.searchProducts
);

module.exports = router;
