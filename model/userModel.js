const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: String,
  lastName: String,
  salary: String,
  department: String,
  lastCompany: String,
  lastSalary: String,
  overallExp: String,
  contactInfo: String,
  yearGrad: String,
  gradStream: String,
});

module.exports = mongoose.model("EMPLOYEE", userSchema);
