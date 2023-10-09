const mongoose = require("mongoose");

const connectDB = (URI) => {
  mongoose
    .connect(URI)
    .then((res) => {
      console.log(`DataBase is connceted ........... with ${res.connection.host}....`);
    })
    .catch((err) => {
      console.log(`Server is not connceted ${err.message}`);
    });
};

module.exports = connectDB
