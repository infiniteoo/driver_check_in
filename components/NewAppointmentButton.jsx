"use client"
import React from 'react'
import './NewAppointmentButton.css'

const NewAppointmentButton = () => {
    return (
        <button className="floating-button" onClick={() => alert('Initiate new appointment sign up!')}>
          +
        </button>
      );
}

export default NewAppointmentButton