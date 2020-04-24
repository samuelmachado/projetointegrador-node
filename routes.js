let Router = require("express").Router;
let Controller = require("./controllers/Controller");

const routes = new Router();

routes.get("/", (req, res) => {
  res.send(200);
});

routes.get("/data", Controller.index);
routes.get("/renderChart", Controller.renderChart);
module.exports = routes;
