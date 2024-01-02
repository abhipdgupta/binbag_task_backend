const { REIMBURSEREQUEST } = require("../models/reimbursement.model");
const { USER } = require("../models/user.model");
const { ErrorHandler } = require("../utils/errorHandler");

const addRequest = async (info) => {
  try {
    const { employeeId, totalAmount, description } = info;

    const request = new REIMBURSEREQUEST({
      employeeId,
      totalAmount,
      description,
    });

    const saved_request = await request.save();

    return saved_request;
  } catch (error) {
    console.log("Error in addRequest");
    throw error;
  }
};

const getRequest = async (options = { page: 1, limit: 15 }) => {
  try {
    const { page, limit } = options;
    const skip = (page - 1) * limit;

    const requests = await REIMBURSEREQUEST.find({})
      .sort({ requestDate: -1 })
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .populate("employeeId", "username email role");

    return requests;
  } catch (error) {
    console.log("Error in getRequest");
    throw error;
  }
};

const filterRequestsByNameOrStatus = async (info) => {
  try {
    const { username, status } = info;
    if (!username && !status) throw new ErrorHandler("Bad Request", 400);

    let user;
    let requests_doc = [];
    if (username && !status) {
      user = await USER.findOne({ username });

      if (!user) throw new ErrorHandler("User not found", 404);

      requests_doc = await REIMBURSEREQUEST.find({
        employeeId: user._id,
      }).populate("employeeId", "username email role");
    }

    if (status && !username) {
      requests_doc = await REIMBURSEREQUEST.find({
        status,
      }).populate("employeeId", "username email role");
    }

    if (status && username) {
      user = await USER.findOne({ username });

      if (!user) throw new ErrorHandler("User not found", 404);

      requests_doc = await REIMBURSEREQUEST.find({
        $and: [{ status: status }, { employeeId: user._id }],
      }).populate("employeeId", "username email role");
    }

    return requests_doc;
  } catch (error) {
    console.log("Error in filterRequestsByNameOrStatus");
    throw error;
  }
};

const updateRequestStatus = async (updatedStatus, requestId) => {
  try {
    const updatedRequest = await REIMBURSEREQUEST.findOneAndUpdate(
      { _id: requestId },
      { $set: { status: updatedStatus } },
      { new: true }
    );

    return updatedRequest
  } catch (error) {
    console.log("Error in updateRequestStatus");
    throw error;
  }
};

module.exports={
    addRequest,
    getRequest,
    filterRequestsByNameOrStatus,
    updateRequestStatus
}