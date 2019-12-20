/* eslint-disable global-require */

import express from 'express';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.app = express();
    this.server = require('http').Server(this.app);

    this.middlewares();
    this.router();
  }

  middlewares() {
    this.app.use(express.json());
  }

  router() {
    this.app.use(routes);
  }
}

export default new App().server;
