var carModel = require('../models/carModel.js');

/**
 * carController.js
 *
 * @description :: Server-side logic for managing cars.
 */
module.exports = {

	/**
	 * carController.list()
	 */
	list: function (req, res) {
		carModel.find(function (err, cars) {
			if (err) {
				return res.status(500).json({
					message: 'Error when getting car.',
					error: err
				});
			}
			return res.json(cars);
		});
	},
	/**
	 * carController.listCompanies()
	 */
	listCompanies: function (req, res) {
		carModel.distinct(
			'carCompany',
			function (err, cars) {
				if (err) {
					return res.status(500).json({
						message: 'Error when getting car.',
						error: err
					});
				}
				return res.json(cars);
			});
	},
	/**
	 * carController.listCompanies()
	 */
	listModels: function (req, res) {
		companyName = req.params.companyName;
		console.log("the comp name is " + companyName);
		carModel.find({"carCompany": companyName},function (err, cars) {
			if (err) {
				return res.status(500).json({
					message: 'Error while getting carModels',
					error: err
				});
			}
			return res.json(cars);
		});
	},
	/**
	 * carController.listCompanies()
	 */
	getImageUrl: function (req, res) {
		model = req.params.modelName;
		carModel.find({
			"carModel": model
		}, function (err, cars) {
			if (err) {
				return res.status(500).json({
					message: 'Error while getting image urls for carModels',
					error: err
				});
			}
			return res.json(cars);
		});
	},

	/**
	 * carController.show()
	 */
	show: function (req, res) {
		var id = req.params.id;
		carModel.findOne({
			_id: id
		}, function (err, car) {
			if (err) {
				return res.status(500).json({
					message: 'Error when getting car.',
					error: err
				});
			}
			if (!car) {
				return res.status(404).json({
					message: 'No such car'
				});
			}
			return res.json(car);
		});
	},

	/**
	 * carController.create()
	 */
	create: function (req, res) {
		var car = new carModel({
			carCompany: req.body.carCompany,
			carModel: req.body.carModel,
			carImageUrl: req.body.carImageUrl

		});

		car.save(function (err, car) {
			if (err) {
				return res.status(500).json({
					message: 'Error when creating car',
					error: err
				});
			}
			return res.status(201).json(car);
		});
	},

	/**
	 * carController.update()
	 */
	update: function (req, res) {
		var id = req.params.id;
		carModel.findOne({
			_id: id
		}, function (err, car) {
			if (err) {
				return res.status(500).json({
					message: 'Error when getting car',
					error: err
				});
			}
			if (!car) {
				return res.status(404).json({
					message: 'No such car'
				});
			}

			car.carCompany = req.body.carCompany ? req.body.carCompany : car.carCompany;
			car.carModel = req.body.carModel ? req.body.carModel : car.carModel;
			car.carImageUrl = req.body.carImageUrl ? req.body.carImageUrl : car.carImageUrl;

			car.save(function (err, car) {
				if (err) {
					return res.status(500).json({
						message: 'Error when updating car.',
						error: err
					});
				}

				return res.json(car);
			});
		});
	},

	/**
	 * carController.remove()
	 */
	remove: function (req, res) {
		var id = req.params.id;
		carModel.findByIdAndRemove(id, function (err, car) {
			if (err) {
				return res.status(500).json({
					message: 'Error when deleting the car.',
					error: err
				});
			}
			return res.status(204).json();
		});
	}
};
