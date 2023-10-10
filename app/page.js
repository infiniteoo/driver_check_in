import axios from 'axios'

export default async function Home() {

  const response = await axios.get('http://localhost:5000/api/')

  console.log(response.data)
  
  return (
   <>
    <h1>Home</h1>
   </>
  )
}
