import React from 'react';
import './App.css';

class HeaderComponent extends React.Component {

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">COB</a>
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">Log In</a></li>
            <li className="nav-item"><a href="#">Sign Up</a></li>
          </ul>
        </nav>
      </header>
    )
  }

}

export default HeaderComponent;
