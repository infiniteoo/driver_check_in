export const OPERATORS = [
  "Angelo",
  "Bianca",
  "Carmen",
  "Dario",
  "Elena",
  "Francesco",
];

export function generateAppointmentData(appointment) {
    return [
      { label: "Driver Name", value: appointment.driverName },
      { label: "Driver Phone", value: appointment.driverPhoneNumber },
      { label: "Trailer Number", value: appointment.trailerNumber },
      { label: "Booker Name", value: appointment.bookerName },
      { label: "Booker Phone", value: appointment.bookerPhoneNumber },
      { label: "Booker Email", value: appointment.bookerEmailAddress },
      { label: "Destination", value: appointment.destination },
      { label: "Carrier", value: appointment.carrier },
      { label: "Purchase Order", value: appointment.purchaseOrderNumber },
      {
        label: "Appointment Time",
        value: new Date(appointment.appointmentTime).toLocaleString(),
      },
      { label: "Check-In Number", value: appointment.checkInNumber },
      { label: "Status", value: appointment.status },
    ];
  }