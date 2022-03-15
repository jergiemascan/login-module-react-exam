const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
    required: [true, "Please enter your firstname!"],
  },
  lastname: {
    type: String,
    trim: true,
    required: [true, "Please enter your lastname"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: 6,
    select: false,
  },
  confirmPassword: {
    type: String,
    select: false,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (pass) {
        // only works on create or save
        return pass === this.password; //abc===abc(true)
      },
      message: "Passwords are not the same!",
    },
  },
});

// presave runs between the moment we recieve the data and the moment it persisted(saving) to the DB,thats when we manupultae ddata
userSchema.pre("save", async function (next) {
  // only when password is modified
  if (!this.isModified("password")) return next();
  // hash password with cost of 10 olike tecken
  this.password = await bcrypt.hash(this.password, 10);
  // deleting pw confirm field not save to database
  this.confirmPassword = undefined;
  next();
});

// checking if given enteredpw is ===user pw in document data true or false,by compare method we can compare the hashed pw and entered
userSchema.methods.correctPassword = async function (
  enteredPassword,
  userPassword
) {
  return await bcrypt.compare(enteredPassword, userPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
