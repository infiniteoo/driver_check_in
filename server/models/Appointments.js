const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  driverName: {
    type: String,
    required: true,
  },
  driverPhoneNumber: {
    type: String,
    required: true,
  },
  trailerNumber: {
    type: String,
    required: true,
  },

  bookerName: {
    type: String,
    required: true,
  },
  bookerPhoneNumber: {
    type: String,
    required: true,
  },
  bookerEmailAddress: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  

  carrier: {
    type: String,
    required: true,
  },
  purchaseOrderNumber: {
    type: String,
    required: true,
  },
  appointmentTime: {
    type: Date,
    required: true,
  },
  checkInNumber: {
    type: String,
    required: true,
  },
  checkInTime: {
    type: Date,
   
  },
  checkOutTime: {
    type: Date,
   
  },
  weight: {
    type: String,
    required: true,
  },
  assignedDoor: {
    type: String
  },
  loaderName: {
    type: String,
    
  },
  status: {
    type: String,
    enum: ["Scheduled", "Checked in", "Loading", "Completed"],
    default: "scheduled",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
