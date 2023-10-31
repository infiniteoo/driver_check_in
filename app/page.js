import Viewport from "../components/Viewport";
import supabase from "../supabase";

export default async function Home() {
  const { data, error } = await supabase
    .from("appointments")
    .select("*")
    .order("id", { ascending: false });

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <Viewport data={data} />
    </>
  );
}
