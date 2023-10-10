import React from 'react';

const AppointmentRow = ({ appointment }) => {
    return (
        <div className="appointment-row flex border-b">
            <div className="p-2 flex-1">{appointment.driverName}</div>
            <div className="p-2 flex-1">{appointment.driverPhoneNumber}</div>
            <div className="p-2 flex-1">{appointment.trailerNumber}</div>
            <div className="p-2 flex-1">{appointment.bookerName}</div>
            <div className="p-2 flex-1">{appointment.bookerPhoneNumber}</div>
            <div className="p-2 flex-1">{appointment.bookerEmailAddress}</div>
            <div className="p-2 flex-1">{appointment.destination}</div>
            <div className="p-2 flex-1">{appointment.carrier}</div>
            <div className="p-2 flex-1">{appointment.purchaseOrderNumber}</div>
            <div className="p-2 flex-1">{new Date(appointment.appointmentTime).toLocaleString()}</div>
            <div className="p-2 flex-1">{appointment.checkInNumber}</div>
            <div className="p-2 flex-1">{appointment.status}</div>
        </div>
    );
};

export default AppointmentRow;
