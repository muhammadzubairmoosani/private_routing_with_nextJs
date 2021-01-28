const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
