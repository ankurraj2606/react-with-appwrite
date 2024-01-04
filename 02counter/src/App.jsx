import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function addValue(count) {
    setCount((count) => count + 1);
    console.log(count);
  }

  function removeValue(count) {
    count >= 1 && setCount((count) => count - 1);
    console.log(count);
  }

  const resetValue = () => {
    setCount(0);
  };

  return (
    <>
      <h1>React course with vite</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => addValue(count)}>Add value</button>
      <button onClick={() => removeValue(count)}>Remove value</button>
      <button onClick={resetValue}>Reset Value</button>
      <p>Footer:</p>
    </>
  );
}

export default App;
