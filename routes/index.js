const applicationController = require('../controllers/applicationController');

const routes = function(app){
	// buy and sell stock
	app.post('/api/saveseason/', applicationController.saveSeason);
	app.get('/api/getaccounts/:uid' , applicationController.getAccounts)
}

module.exports = routes