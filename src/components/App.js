import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const state = useState();
  const [para, setPara] = useState(false);

  // const updatePara = () => {
  //   setPara(
  //     "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  //   );
  // };
  return (
    <div id="main">
      {para ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy{" "}
        </p>
      ) : null}
      <button id="click" onClick={() => setPara(!para)}>
        {" "}
        toggle{" "}
      </button>
    </div>
  );
}

export default App;
