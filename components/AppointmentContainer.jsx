"use client";

import React, { useState, useEffect } from "react";
import AppointmentRow from "./AppointmentCard";
import "./Appointments.css";

const AppointmentContainer = ({ data }) => {
  const [appointments, setAppointments] = useState([data]);

  useEffect(() => {
    setAppointments(data);
  }, [appointments]);

  return (
    <div className="appointments-container mt-4">
      {appointments.map((appointment, index) => (
        <AppointmentRow
          key={index}
          appointment={appointment}
          setAppointments={setAppointments}
          appointments={appointments}
        />
      ))}
    </div>
  );
};

export default AppointmentContainer;
