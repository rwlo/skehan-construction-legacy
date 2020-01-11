import React from "react";
import { NavLink, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <header className="border-bottom">
      <Navbar expand="md">
        <Link exact to="/">
          <Navbar.Brand as="h1" className="mb-0">
            Skehan Construction Company
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle className="border-0" aria-controls="Navbar-toggle" />
        <Navbar.Collapse id="Navbar-toggle">
          <Nav className="ml-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/commercial"
              className="nav-link"
              activeClassName="active"
            >
              Commercial
            </NavLink>
            <NavLink
              to="/gallery"
              className="nav-link"
              activeClassName="active"
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
