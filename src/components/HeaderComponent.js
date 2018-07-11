import React from 'react';
import '../css/App.css';
import ModalSignUpComponent from './ModalSignUpComponent';
import ModalLoginComponent from './ModalLoginComponent';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // isOpen: null,
      showLogin: false,
      showSignUp: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  toggleSignUp() {
    this.setState({
      showSignUp: !this.state.showSignUp
    })
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
            <NavItem onClick={ this.toggleSignUp } eventKey={1}>
              Sign up
            </NavItem>
              <ModalSignUpComponent
                show={this.state.showSignUp}
                onHide={this.toggleSignUp}
              />


            <NavItem onClick={ this.toggleLogin } eventKey={2}>
              Login
            </NavItem>
            <ModalLoginComponent
              show={ this.state.showLogin}
              onHide={this.toggleLogin}
            />

          </Nav>

        </Navbar>
      </header>
    );
  }
}

export default HeaderComponent;
