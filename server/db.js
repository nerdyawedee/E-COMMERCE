const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if connection fails
  }
};

module.exports = connectDB;
