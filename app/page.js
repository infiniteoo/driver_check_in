import axios from "axios";
import NewAppointmentButton from "../components/NewAppointmentButton";

export default async function Home() {
  const { data } = await axios.get("http://localhost:5000/api/");

  console.log(data);



  return (
    <>
      <NewAppointmentButton data={data} />
    </>
  );
}
