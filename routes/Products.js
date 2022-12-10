var express = require('express');
var router = express.Router();
var { ProductsController } = require('../controllers').ProductsController;
const middleware = require('../middleware/jwtHandler');
const validator = require('../middleware/SchemaValidator')
const schemas = require('../schemas').Products;
const controller = new ProductsController();


//PRODUCTS 

router.post('/products/search', validator(schemas.searchProducts, 'body'),
    controller.searchProducts
);

router.post('/products/add', validator(schemas.addProducts, 'body'),
    controller.addProducts
);

router.post('/products/update', validator(schemas.updateProducts, 'body'),
    controller.updateProducts
);

router.delete('/products/delete/:_id', validator(schemas.delete, 'params'),
    controller.deleteProducts
);

// Delivery Area

router.post('/area/search', validator(schemas.searchArea, 'body'),
    controller.searchArea
);

router.post('/area/add', validator(schemas.addArea, 'body'),
    controller.addArea
);

router.post('/area/update', validator(schemas.updateArea, 'body'),
    controller.updateArea
);

router.delete('/area/delete/:_id', validator(schemas.delete, 'params'),
    controller.deleteArea
);

// Delivery Executive

router.post('/executive/search', validator(schemas.searchExecutive, 'body'),
    controller.searchExecutive
);

router.post('/executive/add', validator(schemas.addExecutive, 'body'),
    controller.addExecutive
);

router.post('/executive/update', validator(schemas.updateExecutive, 'body'),
    controller.updateExecutive
);

router.delete('/executive/delete/:_id', validator(schemas.delete, 'params'),
    controller.deleteExecutive
);

// Role

router.post('/role/search', validator(schemas.searchRole, 'body'),
    controller.searchRole
);

router.post('/role/add', validator(schemas.addRole, 'body'),
    controller.addRole
);

router.post('/role/update', validator(schemas.updateRole, 'body'),
    controller.updateRole
);

router.delete('/role/delete/:_id', validator(schemas.delete, 'params'),
    controller.deleteRole
);

// Area Allocation

router.post('/area_allocation/search', validator(schemas.searchAreaAllocation, 'body'),
    controller.searchAreaAllocation
);

router.post('/area_allocation/add', validator(schemas.addAreaAllocation, 'body'),
    controller.addAreaAllocation
);

router.post('/area_allocation/update', validator(schemas.updateAreaAllocation, 'body'),
    controller.updateAreaAllocation
);

router.delete('/area_allocation/delete/:_id', validator(schemas.delete, 'params'),
    controller.deleteAreaAllocation
);


module.exports = router;
