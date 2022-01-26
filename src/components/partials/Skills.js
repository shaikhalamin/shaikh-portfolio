import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Skills extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    };
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-3 mt-3 text-center">
              <span className="border-bottom-3">Skills Overview</span>
            </h4>
          </div>
        </div>

        <Slider {...settings}>
          <div>
            <div className="slide-h3 border">
              <h4 className="text-center">Frontend</h4>
              <ul className="font-15">
                <li>Html CSS Bootstrap JS JQuery</li>
                <li>React Next Vue Typescript</li>
                <li>Redux ReactQuery SWR</li>
                <li>Webpack Babel</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="slide-h3 border">
              <h4 className="text-center"> Backend</h4>
              <ul className="font-15">
                <li>OOP PHP Laravel Symphony</li>
                <li>Node Express Nest </li>
                <li>Socket-IO RabbitMQ</li>
                <li>JEST MOCHA PHP-UNIT</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="slide-h3 border">
              <h4 className="text-center">Database/Devops</h4>
              <ul className="font-15">
                <li>MySQL PostgresSQL</li>
                <li>Mongodb Redis</li>
                <li>Git Nginx Docker</li>
                <li>AWS VPC EB RDS S3 DOCKER</li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Skills;
