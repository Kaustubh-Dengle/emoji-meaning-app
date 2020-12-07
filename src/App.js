import React from "react";
import "./styles.css";

export default function App() {
  function likeClickHandler() {
    console.log("clicked");
  }
  return (
    <div className="App">
      <h1>welcome</h1>
      <button onClick={likeClickHandler}>click me</button>
    </div>
  );
}
