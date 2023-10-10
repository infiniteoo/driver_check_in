import React from "react"
import AppointmentRow from "./AppointmentCard";
import "./Appointments.css"

const AppointmentContainer = ({ data }) => {
    return (
        <div className="appointments-container mt-4">
            <div className="headers flex font-bold border-b-2 pb-2">
                <div className="p-2 flex-1">Driver Name</div>
                <div className="p-2 flex-1">Driver Phone</div>
                <div className="p-2 flex-1">Trailer Number</div>
                <div className="p-2 flex-1">Booker Name</div>
                <div className="p-2 flex-1">Booker Phone</div>
                <div className="p-2 flex-1">Booker Email</div>
                <div className="p-2 flex-1">Destination</div>
                <div className="p-2 flex-1">Carrier</div>
                <div className="p-2 flex-1">Purchase Order</div>
                <div className="p-2 flex-1">Appointment Time</div>
                <div className="p-2 flex-1">Check-In Number</div>
                <div className="p-2 flex-1">Status</div>
            </div>
            {data.map(appointment => (
                <AppointmentRow key={appointment.checkInNumber} appointment={appointment} />
            ))}
        </div>
    );
};

export default AppointmentContainer;
