import React from 'react';
import '../css/App.css';
import ModalSignUpComponent from './ModalSignUpComponent';
import ModalLoginComponent from './ModalLoginComponent';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

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

            <NavItem onClick={this.toggleModal} eventKey={2}>
              Login
              <ModalLoginComponent show={this.state.isOpen}/>
            </NavItem>

          </Nav>

        </Navbar>
      </header>
    );
  }
}

export default HeaderComponent;
