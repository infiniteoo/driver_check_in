const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  driverName: {
    type: String,
    required: true,
  },
  driverNumber: {
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
  bookerEmail: {
    type: String,
    required: true,
  },

  carrier: {
    type: String,
    required: true,
  },
  poNumber: {
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
    required: true,
  },
  checkOutTime: {
    type: Date,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  assignedDoor: {
    type: String,
    required: true,
  },
  loaderName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["scheduled", "checked in", "loading", "completed"],
    default: "scheduled",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
