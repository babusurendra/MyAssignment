var express = require('express');
var router = express.Router();
var carController = require('../controllers/carController.js');

/*
 * GET
 */
router.get('/', carController.list);
/*
 * GET
 */
router.get('/getCompanies', carController.listCompanies);
/*
 * GET
 */

router.get('/getModels/:companyName', carController.listModels);
/*
 * GET
 */
router.get('/getImages/:modelName', carController.getImageUrl);
/*
 * GET
 */
router.get('/:id', carController.show);

/*
 * POST
 */
router.post('/', carController.create);

/*
 * PUT
 */
router.put('/:id', carController.update);

/*
 * DELETE
 */
router.delete('/:id', carController.remove);

module.exports = router;
