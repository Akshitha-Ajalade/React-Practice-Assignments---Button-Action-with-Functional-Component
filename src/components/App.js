import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const state = useState();
  const [para, setPara] = useState("hello");

  const updatePara = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };
  return (
    <div id="main">
      <p id="para">{para}</p>
      <button id="click" onClick={updatePara}>
        click me
      </button>
    </div>
  );
}

export default App;
