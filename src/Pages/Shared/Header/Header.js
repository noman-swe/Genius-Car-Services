import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../images/genius-car-services-high.png";

const Header = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="100"
                            height="45"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;