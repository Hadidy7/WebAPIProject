import React, { useContext } from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../resources/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <Navbar className="mt-3" bg="transparent" variant="dark">
        <Link to="/home">
          <Navbar.Brand>
            <img id="logo" src={logo} alt="TKH Radar" srcSet="" />
          </Navbar.Brand>
        </Link>

        <Form inline>
          <FormControl
            id="searchBar"
            type="text"
            placeholder="Search Your Destination..."
            className="mr-sm-2"
          ></FormControl>
        </Form>
        <Nav>
          <Nav.Link className="ml-5 " href="/news">
            News
          </Nav.Link>
          <Nav.Link className="ml-3" href="/destination">
            Destination
          </Nav.Link>
          <Nav.Link className="ml-3" href="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className="ml-3" href="/contact">
            Contact
          </Nav.Link>
          <button className="ml-3  loginButton">
            <Nav.Link href="/login" className="loginButtonText">
              Login
            </Nav.Link>
          </button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
