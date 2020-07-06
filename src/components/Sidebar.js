import React from 'react'
import {
  Nav,
  NavItem,
  NavDropdown,
  Navbar,
  Container,
  Button,
  ListGroup,
} from 'react-bootstrap'
import logo from '../logo.svg'
import './Sidebar.css'
//import '../App.css'

function Sidebar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="flex-column navbar">
      <Navbar.Brand href="#home" className="d-inline-block align-top ">
        <img
          src={logo}
          width="80"
          height="80"
          className="App-logo"
          alt="logo"
        />
        <p>Sebastian Favaron</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto flex-column">
          <Nav.Link href="#home2">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Sidebar
