import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Proshop</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/cart">
            <i className="fa fa-shopping-cart"></i> Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <i className="fa fa-user"> Sign In </i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
