const mongoose = require('mongoose');

const reimbursementRequestSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USER',
    required: true,
  },
  requestDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'denied', 'paid'],
    default: 'pending',
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  description: {
    type:String,
    default:''
  }
},{
    timestamps:true
})

const REIMBURSEREQUEST=mongoose.model('REIMBURSEREQUEST',reimbursementRequestSchema)

module.exports={REIMBURSEREQUEST}