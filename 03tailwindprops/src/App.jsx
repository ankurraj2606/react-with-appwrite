import { useState } from "react";
import "./App.css";
import Card from "../components/Card";

function App(props) {
  const [count, setCount] = useState(0);

  let myObj = {
    name: "Ankur",
    age: 25,
    address: { city: "Bengaluru", state: "Karnataka" },
  };

  return (
    <>
      <h1 className="text-3xl bg-red-500 p-3 rounded-md">
        Vite with Tailwind css
      </h1>
      <label htmlFor=""></label>
      <Card username="ankur" myObj={myObj} />
    </>
  );
}

export default App;
