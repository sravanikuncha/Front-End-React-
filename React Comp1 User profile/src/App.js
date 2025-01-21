import { About } from "./About";
import { Hero } from "./Hero";
import { Skill } from "./Skills";
import "./styles.css";
import { Component } from "react";
// Use Hero, Skills and About component to display your information
class App extends Component {
  render() {
    return (
      <div className="App">
      <Hero/>
      <Skill/>
      <About/>
      </div>

    )}
}
export default App