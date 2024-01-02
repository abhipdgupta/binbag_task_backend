const { getUserbyId } = require("../services/user");
const { ErrorHandler } = require("../utils/errorHandler");
const { getjwt } = require("../utils/jwt");

const requireValidUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    const info = await getjwt(token);

    const user = await getUserbyId(info?.id);

    if (!user) next(new ErrorHandler("Unauthorized Access", 401));

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in isValidUser");
    next(error);
  }
};

const requireAdminAccess = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const info = await getjwt(token);

    const user = await getUserbyId(info?.id);
    if (!user) next(new ErrorHandler("Unauthorized Access", 401));

    if (user.role !== "admin")
      next(new ErrorHandler("Unauthorized Access", 401));

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in requireAdminAccess");
    next(error);
  }
};

const requireEmployeeAccess = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const info = await getjwt(token);

    const user = await getUserbyId(info?.id);
    if (!user) next(new ErrorHandler("Unauthorized Access", 401));

    if (user.role !== "employee")
      next(new ErrorHandler("Unauthorized Access", 401));

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in requireAdminAccess");
    next(error);
  }
};

module.exports = {
  requireValidUser,
  requireAdminAccess,
  requireEmployeeAccess,
};
