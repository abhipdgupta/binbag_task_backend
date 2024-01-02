const { catchAsyncError } = require("../middleware/catchAsyncError");
const {
  addRequest,
  getRequest,
  filterRequestsByNameOrStatus,
  updateRequestStatus,
} = require("../services/reimbursement");

const handleSubmitRequest = catchAsyncError(async (req, res) => {
  const { totalAmount, description } = req.body;

  const employeeId = req.user._id;

  const _request = await addRequest({ employeeId, totalAmount, description });

  return res.status(200).json({
    success: true,
    status_code: 200,
    message: "Successfully submited your Reimbursement Request",
    data: {
      requestId: _request._id,
    },
  });
});

const handleFetchingReimbursementRequest = catchAsyncError(async (req, res) => {
  const { page, limit } = req.query;

  // if page and limit not provided it will give all requests
  const requests = await getRequest({ page, limit });

  return res.status(200).json({
    success: true,
    status_code: 200,
    message: "Successfully retrived all Reimbursement Requests",
    data: requests,
  });
});

const handleFilterRequests = catchAsyncError(async (req, res) => {
  const { username, status } = req.query;

  /*  
    it will query based on given filters 
    username and status
    if one is given it query based on that 
    if both are given it will use both to query
 */
  const filteredRequest = await filterRequestsByNameOrStatus({
    username,
    status,
  });

  return res.status(200).json({
    success: true,
    status_code: 200,
    message: "Successfully retrived filtered Reimbursement Requests",
    data: filteredRequest,
  })
});


const handleUpdateRequestStatus=catchAsyncError(async(req,res)=>{
    const {updatedStatus,requestId}=req.body

    const updatedRequest=await updateRequestStatus(updatedStatus,requestId)

    return res.status(200).json({
        success: true,
        status_code: 200,
        message: "Successfully updated request",
        data: updatedRequest,
      })



})


module.exports={
    handleSubmitRequest,
    handleFetchingReimbursementRequest,
    handleFilterRequests,
    handleUpdateRequestStatus

}