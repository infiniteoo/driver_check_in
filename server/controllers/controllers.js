// Import any necessary modules
const { response } = require('express');

// Define your controller functions
const getAppointments = async (req, res) => {
    res.send('Welcome to my Express server!');
};



// Export your controller functions
module.exports = {
    getAppointments
};
