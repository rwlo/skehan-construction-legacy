import React from "react";
import { NavLink, Link } from "react-router-dom";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <header className="border-bottom">
      <NavBar expand="md">
        <Link exact to="/">
          <NavBar.Brand as="h1" className="mb-0">
            Skehan Construction Company
          </NavBar.Brand>
        </Link>
        <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <NavBar.Collapse id="navbar-toggle">
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
        </NavBar.Collapse>
      </NavBar>
    </header>
  );
}

export default Header;
