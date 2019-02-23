'use strict';

class BaseController {
    constructor() {
        this.sendError = this.sendError.bind(this);
    }

    sendError(res, message, code = 500) {
        res.status(code).send({ code, message });
    }
}

module.exports = BaseController;
