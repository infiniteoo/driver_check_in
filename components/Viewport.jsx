import React from "react";
import NewAppointmentButton from "./NewAppointmentButton";
import NewAppointmentModal from "./NewAppointmentModal";

const Viewport = ({data}) => {
  return (
    <>
      {" "}
      {/* <NewAppointmentButton data={data} /> */}
      <NewAppointmentModal data={data} />
    </>
  );    
};

export default Viewport;
