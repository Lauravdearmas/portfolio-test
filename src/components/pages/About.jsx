import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function About() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Profile" component={Profile} />
      </Switch>
      <nav>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>
          <li>
            <Link to="/Home">Home</Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

export default About;
