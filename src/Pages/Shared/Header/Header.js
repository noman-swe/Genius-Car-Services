import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo from "../../../images/genius-services-logo.png";
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-body-tertiary bg-custom">
                <Container className='header'>
                    <Navbar.Brand as={Link} to={'/home'} className="logo">
                        <img className='img-logo' height={50} src={logo} alt="" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav-link-infos">
                            <Nav.Link as={Link} to={'/home'}>
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to={'/pricing'} href="#pricing">
                                Pricing
                            </Nav.Link>
                            <NavDropdown title="Dropdown" className='dropdown-menu-style' id="collapsible-nav-dropdown">
                                <NavDropdown.Item as={Link} to={'/action'}>
                                    Action
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/anotherAction'}>
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={'/something'}>Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={'/separated'}>
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className='nav-link-infos'>
                            <Nav.Link as={Link} to={'/about'}>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to={'login'} eventKey={2} >
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;