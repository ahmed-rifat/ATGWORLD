import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from "../../whole.png"
import LoginModal from '../LoginModal/LoginModal';
const Headers = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search for your favorite groups in ATG"
          
        />
      </Form>
      <div>
        <LoginModal></LoginModal>

      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Headers;