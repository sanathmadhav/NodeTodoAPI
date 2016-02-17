
/**
	To include the movies model 
**/

var express = require('express');
var router = express.Router();
var todoController = require('../controller/item');


router.route('/item/getAll').get(todoController.getAll);

router.route('/item/add').post(todoController.addItem);

router.route('/item/delete/:id').delete(todoController.deleteItem);

router.route('/item/status/:status/:id').put(todoController.updateItem);

router.route('/item/getItemByStatus/:status').get(todoController.getItemByStatus);

module.exports = router;
