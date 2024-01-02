const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || 'Internal Server Error'
    err.statusCode = err.statusCode || 500
  
    console.error('Error Stack Trace ->', err.stack)
  
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      status_code: err.statusCode,
    })
  }
  
  module.exports = {errorMiddleware}
  