const { USER } = require("../models/user.model");
const { hashPassword } = require("../utils/bcrypt");
const { ErrorHandler } = require("../utils/errorHandler");

const addUser = async (info) => {
  try {
    const { username, email, password } = info;
    if(!username || !email || !password)
    throw new ErrorHandler("Invalid request", 400);



    const userExist = await getUserbyEmail(email);
    if (userExist) {
      throw new ErrorHandler("Email already exist", 400);
    }

    const hashedPassword = await hashPassword(password);
    const user = new USER({
      email,
      username,
      password: hashedPassword,
    });

    await user.save();

    return user;
  } catch (error) {
    console.log("Error in addUser");
    throw error;
  }
};

const getUserbyEmail = async (email) => {
  try {
    const user = await USER.findOne({ email });

    return user;
  } catch (error) {
    console.log("Error in getUserbyEmail");
    throw error;
  }
};

const getUserbyId = async (id) => {
    try {
      const user = await USER.findOne({ _id:id});
  
      return user;
    } catch (error) {
      console.log("Error in getUserbyEmail");
      throw error;
    }
  };
  

module.exports={
    addUser,
    getUserbyEmail,
    getUserbyId
}
