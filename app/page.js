import axios from "axios";
import Viewport from "../components/Viewport";

export default async function Home() {
  const { data } = await axios.get("http://localhost:5000/api/");

  console.log(data);

  return (
    <>
      <Viewport data={data} />
    </>
  );
}
