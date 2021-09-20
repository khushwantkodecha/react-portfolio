import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <h1>heading from master branch!</h1>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
