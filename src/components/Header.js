import React from 'react';
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export default function Header() {
  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
              <Navbar.Brand>
                <img src="./weather-icon.png" alt="" width="50px" />
                Weather App
              </Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <NavDropdown title="Previous Searches" id="collasible-nav-dropdown">
                          <NavDropdown.Item>TODO:</NavDropdown.Item>
                          <NavDropdown.Item>TODO:</NavDropdown.Item>
                          <NavDropdown.Item>TODO:</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  )
}
