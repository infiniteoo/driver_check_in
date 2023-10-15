"use client"
import React, { useState } from "react";
import { OPERATORS } from "../constants";
import axios from "axios";
import { generateAppointmentData } from '../utils';

const AppointmentRow = ({ appointment }) => {
  const [selectedAssignees, setSelectedAssignees] = useState({ [appointment._id]: '' }); // Initialize with an empty string for the specific appointment

  const handleAssignChange = (event) => {
    const newSelectedAssignees = { ...selectedAssignees };
    newSelectedAssignees[appointment._id] = event.target.value;
    setSelectedAssignees(newSelectedAssignees);

    axios.put(`http://localhost:5000/api/operator/${appointment._id}`, {
      loaderName: event.target.value,
    });
  };

  const handleAction = () => {
    const newStatus = appointment.status === "Loading" ? "Complete" : "Loading";
    axios.put(`http://localhost:5000/api/update-status/${appointment._id}`, {
      status: newStatus,
    });
  };

  const data = generateAppointmentData(appointment);

  return (
    <div className="appointment-row flex flex-col border-2 border-starfield1">
      <div className="flex flex-row flex-wrap justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-starfield1 border-3 flex-wrap flex justify-around text-starfield4"
          >
            <div className="p-2 flex-1">{item.label}</div>
            <div className="p-2 flex-1">{item.value}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-row">
        {appointment.status !== "Complete" ? (
          <>
            <select
              className="p-2"
              value={selectedAssignees[appointment._id]} // Use the selectedAssignee for this appointment
              onChange={handleAssignChange} // No need to pass the index
            >
              <option value="">Select Assignee</option>
              {OPERATORS.map((operator, operatorIndex) => (
                <option key={operator} value={operator}>
                  {operator}
                </option>
              ))}
            </select>

            <button
              className={`p-2 bg-starfield3 text-starfield5 rounded m-5 ${
                appointment.status === "Loading" ? "bg-starfield4" : ""
              }`}
              onClick={handleAction}
            >
              {appointment.status === "Loading" ? "Complete" : "Loading"}
            </button>
            <button className="p-2 bg-starfield2 text-starfield5 rounded m-5">
              Cancel
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default AppointmentRow;

