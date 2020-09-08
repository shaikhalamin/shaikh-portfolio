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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-3 mt-3 text-center"><span className="border-bottom-3">Skills Overview</span></h4>
          </div>
        </div>

        <Slider {...settings}>
          <div>
            <div className="slide-h3 border">
              <h4 className="text-center">Frontend</h4>
              <ul className="font-15">
                <li>Html Css Bootstrap Js JQuery</li>
                <li>React Redux Typescript</li>
                <li>Webpack Babel SSR</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="slide-h3 border">
              <h4 className="text-center"> Backend</h4>
              <ul className="font-15">
                <li>PHP Laravel CakePHP</li>
                <li>Node Express Restify</li>
                <li>Socket IO RabbitMQ</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="slide-h3 border">
              <h4 className="text-center">Database</h4>
              <ul className="font-15">
                <li>MySQL PostgresSQL</li>
                <li>Mongodb,MongoDB Atlas</li>
                <li>Redis</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="slide-h3 border">
              <h4 className="text-center">Devops</h4>
              <ul className="font-15">
                <li>Git Github</li>
                <li>AWS,Digital Ocean,Heroku,Firebase</li>
                <li>Apache,Nginx,Docker</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="slide-h3 border">
              <h4 className="text-center">Programming</h4>
              <ul className="font-15">
                <li>PHP</li>
                <li>NODE</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Skills;
