import React from "react";

const AppointmentRow = ({ appointment }) => {
  return (
    <div className="appointment-row flex flex-col border-2 border-starfield3">
      <div className="flex flex-row flex-wrap justify-between">
        {" "}
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Driver Name</div>
          <div className="p-2 flex-1">{appointment.driverName}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Driver Phone</div>
          <div className="p-2 flex-1">{appointment.driverPhoneNumber}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Trailer Number</div>
          <div className="p-2 flex-1">{appointment.trailerNumber}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Booker Name</div>
          <div className="p-2 flex-1">{appointment.bookerName}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Booker Phone</div>
          <div className="p-2 flex-1">{appointment.bookerPhoneNumber}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Booker Email</div>
          <div className="p-2 flex-1">{appointment.bookerEmailAddress}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Destination</div>
          <div className="p-2 flex-1">{appointment.destination}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Carrier</div>
          <div className="p-2 flex-1">{appointment.carrier}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Purchase Order</div>
          <div className="p-2 flex-1">{appointment.purchaseOrderNumber}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Appointment Time</div>
          <div className="p-2 flex-1">
            {new Date(appointment.appointmentTime).toLocaleString()}
          </div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Check-In Number</div>
          <div className="p-2 flex-1">{appointment.checkInNumber}</div>
        </div>
        <div className="border border-starfield1 border-3 flex-wrap  flex  justify-around   text-starfield4">
          <div className="p-2 flex-1">Status</div>
          <div className="p-2 flex-1">{appointment.status}</div>
        </div>
      </div>
      <div>
        <button className="p-2 bg-starfield3 text-starfield5 rounded m-5">
          Edit
        </button>
        <button className="p-2 bg-starfield2 text-starfield5 rounded m-5">
          Delete
        </button>
      </div>
    </div>
  );
};

export default AppointmentRow;
