import NewAppointmentModal from "./NewAppointmentModal";
import AppointmentContainer from "./AppointmentContainer";

const Viewport = ({ data }) => {
  return (
    <>
      {data && <AppointmentContainer data={data} />}
      <NewAppointmentModal />
    </>
  );
};

export default Viewport;
