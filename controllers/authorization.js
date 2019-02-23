'use strict';

const BaseController = require('./base.js');
const appIdsWhiteList = require('../app_id_whitelist.js');

class AuthorizationController extends BaseController {
    constructor() {
        super();
        this.checkApplication = this.checkApplication.bind(this);

        if (!appIdsWhiteList) {
            throw 'appIdsWhiteList should exists to perform requests';
        }
    }

    checkApplication(req, res, next) {
        const { app_id } = req.headers;

        if (!app_id) {
            this.sendError(res, 'cannot perform request without app_id', 400);
            return;
        }

        if (!appIdsWhiteList.includes(app_id)) {
            this.sendError(res, 'cannot find app_id in whitelist', 403);
            return;
        }

        next();
    }
}

module.exports = new AuthorizationController();
