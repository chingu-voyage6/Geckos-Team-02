import React from 'react';
import './css/App.css';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
import Form from './components/Form';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
        <Form />
      </div>
    )
  }

}
export default App;
