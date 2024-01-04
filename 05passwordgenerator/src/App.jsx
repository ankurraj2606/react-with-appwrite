import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const copypasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-";

    //Math.random() will generate number between 0 to 1, multiplying it with str.length will give a number between 0 to str.length,
    //since, the loop we are using is 1-indexed, we are adding 1 to the value. Math.floor will give the floor value of the random
    //number generated

    //This value will be used as the index in the string str to get the character at that index in the string and that char will be
    //appended to the pass variable.

    //Loop is running, the number of times the length of the password is, so that the password is generated of the required length.

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, []);

  //if we want to generate password everytime the length of password changes, whether chars allowed or not, whether numbers allowed
  //or not changes, then we will use useEffect like this :

  /**
   useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);
   */

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copypasswordToClipboard}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 py-3">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              name=""
              id=""
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 py-3">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              name=""
              id=""
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
        <di className="flex justify-center">
          <button
            className="bg-blue-500 text-white text-xl py-2 px-4 rounded-lg"
            onClick={generatePassword}
          >
            Generate Password
          </button>
        </di>
      </div>
    </>
  );
}

export default App;
