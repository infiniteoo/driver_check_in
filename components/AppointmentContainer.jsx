import React from "react";
import AppointmentRow from "./AppointmentCard";
import "./Appointments.css";

const AppointmentContainer = ({ data }) => {
  return (
    <div className="appointments-container mt-4">
      {data.map((appointment) => (
        <AppointmentRow
          key={appointment.checkInNumber}
          appointment={appointment}
        />
      ))}
    </div>
  );
};

export default AppointmentContainer;
