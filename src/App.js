import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Projetos from "./Components/Projetos";
import Redes from "./Components/Redes";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Redes />
        <Projetos />
      </div>
    </div>
  );
}

export default App;
