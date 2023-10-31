"use client";

import React, { useState, useEffect } from "react";
import "./NewAppointmentModal.css";
import { generateCheckInNumber, generatePurchaseOrderNumber } from "../utils";
import supabase from "@/supabase";

const NewAppointmentModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [form, setForm] = useState({
    driverName: "",
    driverPhoneNumber: "",
    trailerNumber: "",
    bookerName: "",
    bookerPhoneNumber: "",
    bookerEmailAddress: "",
    carrier: "",
    purchaseOrderNumber: "",
    appointmentTime: "",
    weight: "",
    destination: "",
  });

  const handleClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = async () => {
    // add form object to appointments table supabase
    const { data, error } = await supabase
      .from("appointments") // Replace with your actual table name
      .insert(form)
      .select();

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
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
                  name="driverName"
                  value={form.driverName}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Driver Phone Number
                <input
                  className="mt-2 border text-starfield2 p-2 w-full rounded"
                  type="tel"
                  name="driverPhoneNumber"
                  value={form.driverPhoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Trailer Number
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="text"
                  name="trailerNumber"
                  value={form.trailerNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Destination
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="text"
                  name="destination"
                  value={form.destination}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Booker Name
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="text"
                  name="bookerName"
                  value={form.bookerName}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Booker Phone Number
                <input
                  className="mt-2 border text-starfield2 p-2 w-full rounded"
                  type="tel"
                  name="bookerPhoneNumber"
                  value={form.bookerPhoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Booker Email Address
                <input
                  className="text-starfield2 mt-2 border p-2 w-full rounded"
                  type="email"
                  name="bookerEmailAddress"
                  value={form.bookerEmailAddress}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Carrier
                <input
                  className="mt-2 border text-starfield2 p-2 w-full rounded"
                  type="text"
                  name="carrier"
                  value={form.carrier}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Purchase Order Number
                <input
                  className="mt-2 border p-2 w-full text-purple-100 rounded"
                  type="text"
                  name="purchaseOrderNumber"
                  value={form.purchaseOrderNumber}
                  onChange={handleInputChange}
                />
              </label>
              <label className="block text-starfield4 font-bold">
                Appointment Time
                <input
                  className="mt-2 border p-2 w-full rounded"
                  type="datetime-local"
                  name="appointmentTime"
                  value={form.appointmentTime}
                  onChange={handleInputChange}
                />
              </label>

              <label className="block text-starfield4 font-bold">
                Weight
                <input
                  className="mt-2 border p-2 w-full rounded text-starfield2s"
                  type="number"
                  name="weight"
                  value={form.weight}
                  onChange={handleInputChange}
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
              <button
                className="bg-starfield1 text-starfield5 hover:bg-starfield4 px-6 py-2 rounded"
                onClick={handleSubmit}
              >
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
