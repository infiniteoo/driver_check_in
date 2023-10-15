const express = require('express');
const router = express.Router();
const routeController =  require('../controllers/controllers.js');




// Define routes
router.get("/", routeController.getAppointments);

router.post("/new-appointment", routeController.createAppointment);

router.put("/operator/:id", routeController.updateOperator);
router.put("/update-status/:id", routeController.updateStatus);

// Export router
module.exports = router;


