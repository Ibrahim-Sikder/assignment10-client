import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import { AuthContext } from "../../../context/AuthContext/AuthProvider";
import { FaUser } from "react-icons/fa";
import { Image } from "react-bootstrap";
import logo from "../../../images/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.error(error));
  };

  return (
    <div>
      <div className="mb-4 header">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand>
              <img className="logo-img" src={logo} alt="" />
              <Link to="/">Learning Programming Tech</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#pricing">
                  <Link to="/home">Home</Link>
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link to="/courses">Courses</Link>
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link to="/faq">FAQ</Link>
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link to="/blogs">Blogs</Link>
                </Nav.Link>
                <Nav.Link href="#features">
                  <Link to="/about">About</Link>
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">
                  {user?.uid ? (
                    <>
                      <Button
                        onClick={handleLogOut}
                        variant="outline-secondary"
                      >
                        Log Out
                      </Button>

                      <Nav.Link eventKey={2} href="#memes">
                        {
                          <Image
                            title={user?.displayName}
                            style={{ height: "35px" }}
                            roundedCircle
                            src={user?.photoURL}
                          ></Image>
                        }
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      <Button variant="outline-secondary">
                        <Link to="/login">Log In</Link>
                      </Button>
                      <Button variant="outline-secondary">
                        <Link to="/register">Register</Link>
                      </Button>
                      <FaUser></FaUser>
                    </>
                  )}
                  <Button variant="outline-info">Light</Button>{" "}
                  <Button variant="outline-dark">Dark</Button>
                </Nav.Link>
              </Nav>
              <div className="d-lg-none">
                <LeftSideNav></LeftSideNav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
