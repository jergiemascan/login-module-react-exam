const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
const catchAsync = require("../utility/catchAsync");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });
  // applying token jwt-PAYLOAD IS THE ID, THE SECRET IS THE JWT_SECRET,THE HEADER IS AUTOMATIC CREATED
  const token = signToken(newUser._id);
  console.log("new user registered!");

  res.status(201).json({
    status: "success",
    // logging in directly after signing up,so we send token directly here
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // return next({ message: "Please enter your email and password!" });
    res.status(401).json({
      status: "failed",
      message: "Please enter your email and password!",
    });
    return;
  }

  // if user exist && password is correct,explicitly select from database,only what we needed
  const user = await User.findOne({ email }).select("+password");
  // checking email(user) and pw
  if (!user || !(await user.correctPassword(password, user.password))) {
    // return next({ message: "Incorrect email or password" });
    res
      .status(401)
      .json({ status: "failed", message: "Incorrect email or password" });
    return;
  }
  const token = signToken(user._id);

  res.status(200).json({
    status: "success",
    message: "Welcome,you have logged in!",
    token,
  });
});
