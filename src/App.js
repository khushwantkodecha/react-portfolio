import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
    </React.Fragment>
  );
}

export default App;
