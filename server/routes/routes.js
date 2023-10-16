const express = require("express");
const router = express.Router();
const routeController = require("../controllers/controllers.js");

router.get("/", routeController.getAppointments);

router.post("/new-appointment", routeController.createAppointment);

router.put("/operator/:id", routeController.updateOperator);
router.put("/door/:id", routeController.updateDoor);
router.put("/update-status/:id", routeController.updateStatus);
router.get("/po/:po", routeController.getAppointmentByPONumber);
router.put("/check-in", routeController.checkIn);

module.exports = router;
