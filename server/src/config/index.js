const mongoose = require("mongoose");

mongoose.connect("put your mongodb link here...", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
