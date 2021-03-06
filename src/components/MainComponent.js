import React from 'react';
import '../css/App.css';
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent'
import FormComponent from './FormComponent';

class MainComponent extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Church of Brunch</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.</p>
            <hr className="my-4"/>
            <button className="btn btn-success">Click here to sign up!</button>
        </div>
        <SearchComponent />
        <ResultsComponent />
        <FormComponent />

      </div>
    );
  }

}

export default MainComponent;
