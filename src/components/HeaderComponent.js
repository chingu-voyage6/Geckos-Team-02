import React from 'react';
import '../css/App.css';
import ModalSignUpComponent from './ModalSignUpComponent';
import ModalLoginComponent from './ModalLoginComponent';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      show: null
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(id) {
    this.setState({
      isOpen: !this.state.isOpen,
      show: id
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
            <NavItem onClick={ () => this.toggleModal('signUp') } eventKey={1}>
              Sign up
              <ModalSignUpComponent show={ this.state.show === 'signUp' && this.state.isOpen}/>
            </NavItem>

            <NavItem onClick={ () => this.toggleModal('login')} eventKey={2}>
              Login
              <ModalLoginComponent show={ this.state.show === 'login' && this.state.isOpen}/>
            </NavItem>

          </Nav>

        </Navbar>
      </header>
    );
  }
}

export default HeaderComponent;
