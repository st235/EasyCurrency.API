'use strict';

const express = require('express');

const AppServer = require('./server.js');
const AppRoutes = require('./routes.js');

const server = new AppServer(express());
const routes = new AppRoutes();

server.with(routes).listen(process.env.PORT);
