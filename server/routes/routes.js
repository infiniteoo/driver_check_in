const express = require('express');
const router = express.Router();
const routeController =  require('../controllers/controllers.js');




// Define routes
router.get("/", routeController.getAppointments);

router.post("/new-appointment", routeController.createAppointment);
// Export router
module.exports = router;
