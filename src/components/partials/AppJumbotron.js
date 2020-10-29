import React, { Component } from "react";
import bG from "../bgParticle.gif";
import cv from "../Resume_of_Shaikh_AL_Amin.pdf";

class AppJumbotron extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron"
          style={{
            borderRadius: "0px",
            backgroundImage: `url(${bG})`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-white">
                  <b>
                    <span className="i-am">I'm</span> Shaikh Al Amin
                  </b>
                </h1>
                <p className="text-white">
                  Senior Software Engineer | Frontend Specialist
                </p>
                <p className="">
                  <i className="fa fa-envelope-o mr-1 round-icon" aria-hidden="false" style={{ fontSize: "18px", color: "#fff" }}></i>
                  <span className="text-white" style={{ fontSize: "18px", color: "#fff" }}>
                    alamin.cse15@gmail.com
                  </span>
                </p>
                <div className="row">
                  <div className="col-md-6 offset-md-3 mb-3 mt-1">
                    <a
                      href={cv}
                      className="btn btn-sm btn-outline-info text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Download Resume
                    </a>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-warning text-white ml-2"
                    >
                      Hire Me
                    </button>
                  </div>
                </div>

                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <a
                      className="btn btn-sm"
                      href="https://www.linkedin.com/in/shaikh-al-amin/"
                    >
                      <i
                        className="fa fa-linkedin-square"
                        style={{ fontSize: "25px", color: "#fff" }}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="btn btn-sm"
                      href="https://github.com/shaikhalamin"
                    >
                      <i
                        className="fa fa-github-square"
                        style={{ fontSize: "25px", color: "#fff" }}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="btn btn-sm"
                      href="https://twitter.com/shaikhalamin015"
                    >
                      <i
                        className="fa fa-twitter-square"
                        style={{ fontSize: "25px", color: "#fff" }}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default AppJumbotron;
