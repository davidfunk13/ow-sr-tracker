const applicationController = require('../controllers/applicationController');

const routes = function(app){
	// buy and sell stock
	app.post('/api/saveseason/', applicationController.saveSeason);
}

module.exports = routes