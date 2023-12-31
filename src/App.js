import { useState } from "react";
import "./components/style.css";
import Header from "./components/Header";
import Selects from "./components/Selects";

function App() {
  return (
    <div>
      <Header />
      <Selects />
    </div>
  );
}

export default App;
