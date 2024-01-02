const express = require("express");
const router = express.Router();

const {
  handleUserLogin,
  handleUserLogout,
  handleUserRegister,
} = require("../controllers/user.controller");
const {requireValidUser}=require('../middleware/authCheck')

router.post("/register", handleUserRegister);
router.post("/login", handleUserLogin);
router.post("/logout",requireValidUser, handleUserLogout);

module.exports = router;
