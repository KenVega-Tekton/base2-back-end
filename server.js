const app = require("./app");
const config = require("./config");

app.listen(config.PORT, () => {
  console.log(`server started listening on port : ${config.PORT}`);
});
