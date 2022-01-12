import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default class Headers extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/home">Daftar Makanan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav className="me-auto">
                  <Nav.Link href="/">Logout</Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
