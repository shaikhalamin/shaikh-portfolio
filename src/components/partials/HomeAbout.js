import React, { Component } from "react";
import shaikh_image from "./images/shaikh_alamin.jpg";
import cv from "../SENIOR_SOFTWARE_ENGINEER_NODEJS_7YRS_SHAIKH_AL_AMIN_CV.pdf";

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
                I am Shaikh Al Amin. Experienced and solution-oriented
                professionals with a demonstrated history of 7+ years of
                impressive background in overseeing all aspects of software
                development life-cycle from concept through to development and
                delivery.
                <ul className="mt-2">
                  <li>
                    1 year of working experience with a Wedding Planning App
                    along with a Photo app and E-commerce apps at
                    <span className="ml-2">
                      <a href="https://tikweb.com/">(Tikweb) .</a>{" "}
                    </span>
                  </li>
                  <li>
                    4.5 Years working experience in ERP-CRM & Property
                    Management at{" "}
                    <a
                      href="https://www.venturas-bd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Venturas Limited
                    </a>{" "}
                    & <a href="https://www.wipro.com/">Wipro Limited .</a>
                  </li>
                  <li>
                    2.5 Years work experience in Travel Booking Sector at
                    <span className="ml-2">
                      <a href="https://teamamericany.com/index.php/home/start">
                        Volatour(Teamnet) .
                      </a>{" "}
                    </span>
                  </li>
                </ul>
              </p>
              <p className="text-justify ml-3 font-15">
                I like to play Cricket, Table Tennis, Badminton and NFS.
              </p>

              <p className="text-justify ml-3 font-15"></p>

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
                        Download Resume
                      </a>
                    </li>
                    <li className="nav-item">
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
