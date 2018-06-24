const db = require('../models/index');

module.exports = {
	saveSeason: (req, res) => {
		db.User.create(req.body)
		.then(data => {
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
		.catch(err => { console.log(err)})	},
}
