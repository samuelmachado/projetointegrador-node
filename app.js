let routes = require("./routes");
var express = require("express");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.static(__dirname + "/views"));
  }

  routes() {
    this.server.use(routes);
  }
}

let app = new App().server;
app.listen(3333);
