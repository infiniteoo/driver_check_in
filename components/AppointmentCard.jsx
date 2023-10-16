"use client";

import React, { useState } from "react";
import { OPERATORS } from "../constants";
import { DOORS } from "../constants";
import axios from "axios";
import { generateAppointmentData } from "../utils";

const AppointmentRow = ({ appointment }) => {
  const [selectedAssignees, setSelectedAssignees] = useState({
    [appointment._id]: "",
  });
  const [selectedDoors, setSelectedDoors] = useState({
    [appointment._id]: "",
  });

  const handleDoorChange = (event) => {
    const newSelectedDoors = { ...selectedDoors };
    newSelectedDoors[appointment.assignedDoor] = event.target.value;
    setSelectedDoors(newSelectedDoors);

    axios.put(`http://localhost:5000/api/door/${appointment._id}`, {
      assignedDoor: event.target.value,
    });
  };

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
    <div className="appointment-row flex flex-col border-2 border-starfield1 rounded p-4 my-4">
      <div className="flex flex-row flex-wrap justify-between">
        {data.map((item, index) => (
          <div
            key={index}
            className=" bg-white border-3 flex-wrap flex justify-around text-starfield4 p-2"
          >
            <div className="font-semibold">{item.label}:&nbsp;</div>
            {"  "}
            <div className="font-bold text-starfield3">{item.value}</div>
          </div>
        ))}
        <div className=" bg-white border-3 flex-wrap flex justify-around text-starfield4 p-2">
          <div className="font-semibold">Loader:&nbsp;</div>
          <div className="font-bold text-starfield3">
            {appointment.loaderName}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center my-4">
        {appointment.status !== "Complete" ? (
          <>
            <select
              className="p-2 bg-white rounded " // Added border styling
              value={selectedAssignees[appointment._id]}
              onChange={handleAssignChange}
              style={{ height: "2.5rem" }} // Adjust the height to match the buttons
            >
              <option value={appointment.loaderName}>
                {appointment.loaderName
                  ? appointment.loaderName
                  : "Select Assignee"}
              </option>
              {OPERATORS.map((operator, operatorIndex) => (
                <option key={operator} value={operator}>
                  {operator}
                </option>
              ))}
            </select>
            <select
              className="p-2 bg-white rounded " // Added border styling
              value={selectedAssignees[appointment.assignedDoor]}
              onChange={handleDoorChange}
              style={{ height: "2.5rem" }} // Adjust the height to match the buttons
            >
              <option value={appointment.assignedDoor}>
                {" "}
                {appointment.assignedDoor
                  ? appointment.assignedDoor
                  : "Select Door"}
              </option>
              {DOORS.map((door, doorIndex) => (
                <option key={door} value={door}>
                  {door}
                </option>
              ))}
            </select>

            <button
              className={`p-2 bg-starfield3 text-starfield5 rounded m-5 ${
                appointment.status === "Loading" ? "bg-starfield4" : ""
              }`}
              onClick={handleAction}
            >
              {appointment.status === "Loading"
                ? "Set Completed"
                : "Start Loading"}
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
