import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


export default function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href="#">
                        <img src="./weather-icon.png" alt="" width="50px" />
                        Weather App
                    </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Previously Viewed" id="basic-nav-dropdown">
                            <NavDropdown.Item>...</NavDropdown.Item>
                            <NavDropdown.Item>...</NavDropdown.Item>
                            <NavDropdown.Item>...</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
