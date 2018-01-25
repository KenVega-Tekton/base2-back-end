const mongoose = require("mongoose");
const { Schema } = mongoose;

const DishSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { collection: "dishCollection" }
);

module.exports = mongoose.model("DishModel", DishSchema);
// exporta el modelo creado basado en el esquema
