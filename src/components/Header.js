import React, { useState, useEffect } from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import WeatherModal from '../routes/WeatherModal';


export default function Header({ newList }) {
    const [localList, setLocalList] = useState(newList);
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
        setLocalList(newList);
    }, [newList]);


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
                            {localList.map((e, index) => (
                                <NavDropdown.Item key={index}>
                                    <div onClick={() => setModalShow(true)}>
                                        {e.name},
                                        {e.sys.country}
                                    </div>
                                    <WeatherModal show={modalShow} onHide={() => setModalShow(false)} data={e} />
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
