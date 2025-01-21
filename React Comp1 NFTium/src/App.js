import "./styles.css";
import { Component } from "react";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";

export default function App() {
  // Write this code in Navbar.js file
    return (
      <div className="App">
        <Navbar/>
        <Hero/>
        <About/>
      </div>
    );
}
