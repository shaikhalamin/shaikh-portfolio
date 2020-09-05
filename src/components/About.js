import React, { Component } from "react";
import AppNavbar from "./partials/AppNavbar";

class About extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <div
          className="jumbotron"
          style={{ borderRadius: "0px", backgroundColor: "#fff" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3> Hello about</h3>
              </div>
              <div className="col-md-6">
                <h3>hello about</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
