import React from 'react';
import './css/App.css';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    );
  }
}
export default App;
