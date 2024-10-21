const mongooes = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongooes.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connect");
  } catch (error) {
    console.log("Database connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
