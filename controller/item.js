
var Item = require('../model/item');

exports.getAll = function(req, res) {
	Item.find(function (err, items) {
		if(err) {
			return res.send(err);
		}
		res.json(items);
	});
};

exports.addItem = function(req, res) {
	var item = new Item(req.body);
	item.save(function(err) {
		if(err) {
			return res.send(err);
		}
		res.send({message: 'Item added'});
	});
};

exports.deleteItem = function(req, res) {
	Item.remove({_id: req.params.id}, function (err, item) {
		if(err) {
			return res.send(err);
		}
		res.send({message: 'Item deleted'});
	});
};

exports.updateItem = function(req, res) {
	Item.findOne({_id: req.params.id}, function (err, item) {
		if(err) {
			return res.send(err);
		}
		item["status"] = req.params.status;
		item.save(function(err) {
			if(err) {
				return res.send(err);
			}
			res.send({message: 'Item updated'});
		});
	});
};

exports.getItemByStatus = function(req, res) {
	Item.find({status: req.params.status}, function (err, items) {
		if(err) {
			return res.send(err);
		}
		res.json(items);
	});
};