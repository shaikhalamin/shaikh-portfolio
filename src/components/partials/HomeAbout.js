import React, { Component } from "react";
import shaikh_image from "./images/shaikh_alamin.jpg";
import cv from "../SHAIKH_AL_AMIN_CV.pdf";

class HomeAbout extends Component {
  render() {
    return (
      <section className="">
        <div className="container mt-5 mb-3">
          <div className="row">
            <div className="col-md-6">
              <img
                src={shaikh_image}
                className="img-fluid"
                alt="shaikh_image"
              />
            </div>
            <div className="col-md-6 border-left">
              <h4 className="text-justify ml-3 mb-3 text-dark">
                <span className="border-bottom-3">About</span> Me
              </h4>
              <p className="text-justify ml-3 font-15">
                I am Shaikh Al Amin. Working as a Senior Software Engineer at
                Wipro Limited where i am providing ERP solution to E2E
                customer.I have work experience with B2C Ecommerce of travel
                booking system as well. I love stick to new programming
                challenge. I am very much curious about new tech and like to
                implement those new tech in real world problems.
              </p>
              <div className="row">
                <div className="col-md-12 mt-2">
                  <ul className="nav ml-3">
                    <li className="nav-item">
                      <a
                        href={cv}
                        className="btn btn-sm btn-info text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Download CV
                      </a>
                    </li>
                    <li className="nav-item">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-warning text-dark ml-2"
                      >
                        Hire Me
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomeAbout;
