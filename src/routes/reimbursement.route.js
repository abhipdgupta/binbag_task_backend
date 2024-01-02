const express = require("express");
const {
  handleSubmitRequest,
  handleFetchingReimbursementRequest,
  handleFilterRequests,
  handleUpdateRequestStatus,
} = require("../controllers/reimbursement.controller");
const {requireAdminAccess,requireEmployeeAccess,requireValidUser}=require('../middleware/authCheck')
const router = express.Router();

router.post("/submit-request",requireEmployeeAccess, handleSubmitRequest);
router.get("/",requireAdminAccess, handleFetchingReimbursementRequest);
router.get("/filter",requireAdminAccess, handleFilterRequests);
router.put("/status",requireAdminAccess, handleUpdateRequestStatus);

module.exports = router;
