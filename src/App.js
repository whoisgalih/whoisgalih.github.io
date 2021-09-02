import { Component } from "react";
import "./styles/social.css";
import Hero from "./components/Hero.js";
import AppBar from "./components/AppBar.js";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* navbar */}
        <AppBar />
        {/* hero */}
        <Hero />
      </div>
    );
  }
}
