import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <img src="https://cdn2.vectorstock.com/i/1000x1000/70/01/mobile-learning-logo-design-template-vector-20727001.jpg" alt="logo" />
          <Navbar.Brand href="#home">Learning English</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home">Home</Link>
              <Link to="/course">Courses</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/blog">Blog</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
