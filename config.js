const config = {
  PORT: process.env.PORT || 5000,
  MONGODB: process.env.MONGODB || "mongodb://localhost:27017/baseBackEnd",
  mongooseOptions: {
    useMongoClient: true
  }
};

module.exports = config;
