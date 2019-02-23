'use strict';

const authoriationController = require('./controllers/authorization.js');
const currenciesController = require('./controllers/currencies.js');

class AppRoutes {
    bind(app) {
        app.get('/latest', 
                authoriationController.checkApplication, 
                currenciesController.latest);
    }
}

module.exports = AppRoutes;
