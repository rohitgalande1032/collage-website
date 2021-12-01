
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navbars = () => {
    return (
        <>
            <Navbar bg="light" expand="sm" stiky="top" className="mr-16 fs-5 fw-lighter" >
                <Container className="nav">

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="px-1">Home</Nav.Link>

                            <NavDropdown title="About" id="basic-nav-dropdown" className="px-1">
                                <NavDropdown.Item href="#action/3.1">About Institute</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Mission, Vision,Goals {`&`} Core Values</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Right To Information Act</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Contact us</NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title="Departments" id="basic-nav-dropdown" className="px-1">
                                <NavDropdown.Item href="#action/3.1">Civil Engineering</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Mechanical Engineering</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Electronic {`&`} Telecommunication Engineering</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Automobile Engineering</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Instrumentation {`&`} Control Engineering</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.6">Admission section</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.7">Applied Science</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.8">Office</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.9">Workshop</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Facilities" id="basic-nav-dropdown" className="px-1">
                                <NavDropdown.Item href="#action/3.1">Boys Hostel</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Girls Hostel</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Gymkhana</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Library</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">EDSUC</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Admission" id="basic-nav-dropdown" className="px-1">
                                <NavDropdown.Item href="#action/3.1">FY Admission</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">DSY admission</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">FEE STRUCTURE</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Admitted Candidate 2020-21</NavDropdown.Item>

                            </NavDropdown>

                            <Nav.Link href="/notices" className="px-1">Notices</Nav.Link>

                            <NavDropdown title="Placements" id="basic-nav-dropdown" className="px-1">
                                <NavDropdown.Item href="#action/3.1">TPO's Message</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">TPO Activities</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Collaborations</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">TPO Events</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/tenders" className="px-1">Tenders</Nav.Link>

                            <Nav.Link href="/gallery" className="px-4">Gallery</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbars
