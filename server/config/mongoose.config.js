const mongoose = require("mongoose");

const connectDB = () => {
  // mongoose.set('strictQuery' = true);
  mongoose
    .connect("mongodb://127.0.0.1:27017/productMngrDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      retryWrites: true,
    })
    .then(() => console.log("Established a connection to the database"))
    .catch((err) =>
      console.log("Something went wrong when connecting to the database", err)
    );
};


module.exports = connectDB;