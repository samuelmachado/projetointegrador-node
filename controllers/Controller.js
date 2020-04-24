let Country = require("../models/Country");
const path = require("path");

class Controller {
  async index(req, res) {
    let country1 = new Country("Brazil", 209.5);
    let country2 = new Country("USA", 328.2);

    res.send([country1, country2]);
  }

  async render(req, res) {
    res.sendFile(path.resolve("./views/index.html"));
  }
}
module.exports = new Controller();
// export default new Controller();
