"use client";
import React, { useState, useEffect } from "react";
import "./NewAppointmentModal.css";
import { generateCheckInNumber, generatePurchaseOrderNumber } from "../utils";

const NewAppointmentModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleClose = () => {
    setModalVisible(false);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button
        className="floating-button bg-starfield1 text-starfield5 hover:bg-starfield4"
        onClick={() => setModalVisible(true)}
      >
        +
      </button>
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content bg-starfield5 p-8 rounded-xl shadow-lg w-4/5 md:w-2/3 lg:w-1/2">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={handleClose}
            >
              &times;
            </button>

            <h2 className="text-2xl mb-6 font-semibold text-starfield5s text-center  bg-gradient-to-r from-starfield1 to-starfield4 ">
              New Appointment
            </h2>
            <label className="block mb-4 font-bold text-starfield4 text-center">
              Driver Name
              <input className="border p-2 w-full rounded" type="text" />
            </label>
            <label className="block mb-4 text-starfield3">
              Carrier:{" "}
              <input className="border p-2 w-full rounded" type="text" />
            </label>
            <label className="block mb-4 text-starfield3">
              Purchase Order Number:{" "}
              <input
                className="border p-2 w-full rounded"
                type="text"
                defaultValue={generatePurchaseOrderNumber()}
                readOnly
              />
            </label>
            <label className="block mb-4 text-starfield3">
              Appointment Time:{" "}
              <input
                className="border p-2 w-full rounded"
                type="datetime-local"
              />
            </label>
            <label className="block mb-4 text-starfield3">
              Check In Number:{" "}
              <input
                className="border p-2 w-full rounded"
                type="text"
                defaultValue={generateCheckInNumber()}
                readOnly
              />
            </label>
            <label className="block mb-4 text-starfield3">
              Check In Time:{" "}
              <input
                className="border p-2 w-full rounded"
                type="datetime-local"
              />
            </label>
            <label className="block mb-4 text-starfield3">
              Check Out Time:{" "}
              <input
                className="border p-2 w-full rounded"
                type="datetime-local"
              />
            </label>
            <label className="block mb-4 text-starfield3">
              Weight:{" "}
              <input className="border p-2 w-full rounded" type="number" />
            </label>
            <button
              className="bg-starfield1 text-starfield5 hover:bg-starfield4 px-6 py-2 rounded"
              onClick={handleClose}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewAppointmentModal;
