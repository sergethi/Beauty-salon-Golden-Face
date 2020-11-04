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
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/About" exact component={About} />
      <Route path="/Services" exact component={Services} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Projects" exact component={Projects} />
      <Switch/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
