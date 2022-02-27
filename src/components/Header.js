import React, { useState } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import WeatherModal from '../routes/WeatherModal';


export default function Header() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Header>
                    <a href="/" >
                        <Navbar.Brand>
                            <img src="./weather-icon.png" alt="" width="50px" />
                            Weather App
                        </Navbar.Brand>
                    </a>
                </Navbar.Header>
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
            <WeatherModal show={modalShow} onHide={() => setModalShow(false)} data={{}} />
        </Navbar>
    )
}
