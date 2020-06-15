import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./mini-components/Nav";
import Contents from "./mini-components/Contents";
import About from "./mini-components/About";
import Contact from "./mini-components/Contact";
import Footer from "./mini-components/Footer";

export default function Dashboard(props) {
  function handleClick() {
    alert("Logged out");
    props.setUserLog(0);
  }
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Contents} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <button
        style={{ position: "relative", left: "2%", bottom: "10px" }}
        onClick={handleClick}
        className="btn btn-outline-dark"
      >
        Log out
      </button>
      <Footer />
    </Router>
  );
}
