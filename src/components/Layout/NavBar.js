import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

export const NavBar = ({ mode, toggleMode }) => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg={mode}
          variant={mode}
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Brand href="#">React Tutorial</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  React Tutorial
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="Enable dark Mode"
                    onClick={toggleMode}
                  />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};
