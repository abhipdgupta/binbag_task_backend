const { catchAsyncError } = require("../middleware/catchAsyncError");
const { getUserbyEmail, addUser } = require("../services/user");
const { comparePasswords } = require("../utils/bcrypt");
const { getjwt, setjwt } = require("../utils/jwt");
const { ErrorHandler } = require("../utils/errorHandler");

const handleUserRegister = catchAsyncError(async (req, res) => {
  const { username, email, password } = req.body;

  const _user = await addUser({ username, email, password });

  return res.status(200).json({
    success: true,
    status_code: 200,
    message: "User registered",
    data: { username: _user.username, email: _user.email },
  });
});

const handleUserLogin = catchAsyncError(async (req, res) => {
  const { email, password } = req.body;

  const _user = await getUserbyEmail(email);

  if (!_user) {
    throw new ErrorHandler("User not found", 404);
  }

  const isPasswordCorrect = await comparePasswords(password, _user.password);
  if (!isPasswordCorrect) {
    throw new ErrorHandler("User password wrong", 400);
  }

  const token = await setjwt(_user._id);

  res.cookie("token", token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 ,secure:false});

  return res.status(200).json({
    success: true,
    status_code: 200,
    message: "User Logged In",
    data: { token, username: _user.username, email: _user.email },
  });
});

const handleUserLogout = catchAsyncError(async (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    success: true,
    status_code: 200,
    message: "User Logged out",
  });
});

module.exports = {
  handleUserLogin,
  handleUserLogout,
  handleUserRegister,
};
