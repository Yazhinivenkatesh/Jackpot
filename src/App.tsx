import React from "react";
import "./App.css";
import JackpotLightController from "./components/JackpotLightController";
import JackpotFunds from "./components/jackpotFunds";

function App() {
  return (
    <div className="App">
      <JackpotLightController />
      <JackpotFunds />
    </div>
  );
}

export default App;
