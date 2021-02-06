import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link className="mr-5">home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="mr-5">about us</Nav.Link>
            </LinkContainer>
            </Nav>
            <Navbar.Brand>
              <h1>The Sentimental Image</h1>
            </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
