const db = require('../models/index');

module.exports = {
	saveSeason: (req, res) => {
		db.User.create(req.body)
		.then(data => {
			res.json(data)
		}).catch(err => {
			console.log(err)
		})},
	getAccounts: (req, res) => {
		let uid = req.params.uid;

		console.log(uid)
		db.User.find({'uid': uid}).then(data => {
			console.log('hello')
			res.json(data)
		}).catch(err =>{
			console.log(err)
		})
	},
	saveAccountNode: (req, res) => {
		console.log(req.body);
		db.User.create(req.body)
		.then(data => {
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
	},
}
