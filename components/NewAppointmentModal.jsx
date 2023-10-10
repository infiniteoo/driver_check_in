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

            <h2 className="text-2xl text-starfield3 mb-6 font-semibold text-center">
              New Appointment
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block text-starfield4 font-bold">
                Driver Name
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="text"
                />
              </label>
              <label className="block text-starfield4 font-bold">
               Driver Phone Number
                <input
                  className="mt-2 border text-starfield2 p-2 w-full rounded"
                  type="tel"
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Trailer Number
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="text"
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Booker Name
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="text"
                />
              </label>
              <label className="block text-starfield4 font-bold">
               Booker Phone Number
                <input
                  className="mt-2 border text-starfield2 p-2 w-full rounded"
                  type="tel"
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Booker Email Address
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="email"
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Carrier
                <input
                  className="mt-2 border text-starfield2 p-2 w-full rounded"
                  type="text"
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Purchase Order Number
                <input
                  className="mt-2 border p-2 w-full text-purple-100 rounded"
                  type="text"
                  
                  
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Appointment Time
                <input
                  className="mt-2 border p-2 w-full rounded"
                  type="datetime-local"
                />
              </label>
              
              <label className="block text-starfield4 font-bold">
                Weight
                <input
                  className="mt-2 border p-2 w-full rounded text-starfield2s"
                  type="number"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                className="bg-gray-200 text-starfield5 hover:bg-gray-300 px-6 py-2 rounded"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button className="bg-starfield1 text-starfield5 hover:bg-starfield4 px-6 py-2 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewAppointmentModal;
