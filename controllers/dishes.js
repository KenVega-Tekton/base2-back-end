const DishModel = require("../models/Dish");

function getDishes(req, res) {
  DishModel.find()
    .then(dishes => {
      if (!dishes) {
        return res.status(400).jsonp();
      }

      return res.status(200).jsonp(dishes);
    })
    .catch(err => {
      return res.status(500).jsonp(err);
    });
}

module.exports = {
  getDishes
};
