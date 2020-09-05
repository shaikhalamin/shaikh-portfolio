import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";

import ContactModal from "./ContactModal";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <>
        <Navbar
          expand="sm"
          bg="white"
          className="navbar-light"
          style={{ backgroundColor: "#000" }}
        >
          <Container>
            <NavbarBrand href="/" className="text-white">
              <h2>
                <span className="text-info">Shaikh</span>{" "}
                <span className="text-white">Dev</span>
              </h2>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="toggler-bg" />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="ml-3 mr-3">
                  <Link to="/" className="text-white custom-hover nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem className="ml-3 mr-3 ">
                  <Link
                    to="/about"
                    className="text-white custom-hover nav-link"
                  >
                    About
                  </Link>
                </NavItem>
                <NavItem className="ml-3 mr-3 ">
                  <Link
                    to="/projects"
                    className="text-white custom-hover nav-link"
                  >
                    Projects
                  </Link>
                </NavItem>
                <NavItem className="ml-3 mr-3">
                  <Link to="/blog" className="text-white custom-hover nav-link">
                    Blog
                  </Link>
                </NavItem>
                <NavItem className="ml-3 mr-3 ">
                  <ContactModal />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AppNavbar;
