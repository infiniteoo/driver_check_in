// Import any necessary modules
const { response } = require("express");
const Appointment = require("../models/Appointments");
const { generateCheckInNumber } = require("../../utils/");

// Define your controller functions
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).send(appointments);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAppointmentByPONumber = async (req, res) => {
  try {
    const { po } = req.params;
    const appointments = await Appointment.find({
      $or: [
        { checkInNumber: po }, // Search for PO number in checkInNumber field
        { purchaseOrderNumber: po },     // Search for PO number in poNumber field
      ],
    });

    res.status(200).send(appointments);
  } catch (err) {
    res.status(400).send(err.message);
  }
};


const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.status(200).send(appointment);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateOperator = async (req, res) => {
  try {
    const { id } = req.params;
    const { loaderName } = req.body;

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { loaderName },
      { new: true }
    );

    res.status(200).send(appointment);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const createAppointment = async (req, res) => {
  try {
    let checkInNumber;
    let isUnique = false;

    // Keep generating a checkInNumber until a unique one is found
    while (!isUnique) {
      checkInNumber = generateCheckInNumber();
      const existingAppointment = await Appointment.findOne({ checkInNumber });

      if (!existingAppointment) {
        isUnique = true;
      }
    }

    const appointment = new Appointment(req.body);

    appointment.checkInNumber = checkInNumber;
    appointment.status = "Scheduled";
    appointment.checkInTime = null;
    appointment.checkOutTime = null;
    appointment.assignedDoor = null;
    appointment.loaderName = null;

    await appointment.save();
    res.status(201).send(appointment);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Export your controller functions
module.exports = {
  getAppointments,
  createAppointment,
  updateOperator,
  updateStatus,
  getAppointmentByPONumber,
};
