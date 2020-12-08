import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [userInput, setUserInput] = useState("");
  function onChangeHandler(event) {
    setUserInput(event.target.value);
  }

  return (
    <div className="App">
      <h1>welcome</h1>
      <input onChange={onChangeHandler}></input>
      <div> hello {userInput}</div>
    </div>
  );
}
