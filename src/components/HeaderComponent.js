import React from 'react';
import '../css/App.css';
import ModalSignUpComponent from './ModalSignUpComponent';
import ModalLoginComponent from './ModalLoginComponent';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderComponent extends React.Component {

  render() {
    return (
      <header className="headerBox">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">COB</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <ModalSignUpComponent />
            </NavItem>
            <NavItem eventKey={2}>
              <ModalLoginComponent />
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

export default HeaderComponent;
