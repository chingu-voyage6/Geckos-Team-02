import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import FooterComponent from './FooterComponent';

class App extends React.Component {

  render() {
    return (
      <div>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    )
  }

}

export default App;
