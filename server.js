'use strict';

const DEFAULT_PORT = 3000;

class AppServer {
    constructor(app) {
        this.app = app;
    }

    with(routes) {
        routes.bind(this.app);
        return this;
    }

    listen(port = DEFAULT_PORT) {
        this.app.listen(port, 
            () => console.log(`Server had been started on ${port}`));
    }
}

module.exports = AppServer;
