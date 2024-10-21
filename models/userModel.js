const mongooes = require("mongoose");

const userSchema = new mongooes.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

const User = mongooes.model("User", userSchema);

module.exports = User;
