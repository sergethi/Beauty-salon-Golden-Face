import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Nav />
    <Switch/>
      <Route path="/Home" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Services" component={Services} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Projects" component={Projects} />
      <Switch/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
