import React from 'react';
import '../css/App.css';
import ResultsPanel from './ResultsPanel';

class ResultsComponent extends React.Component {

  render() {
    return (
      <div className="resultsBox">
        <h4>Results:</h4>
        <ResultsPanel />
      </div>
      )
    }
}

export default ResultsComponent;
