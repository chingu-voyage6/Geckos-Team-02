import React from 'react';
import '../css/App.css';
import { Panel } from 'react-bootstrap';

class ResultsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: ['Brunch Place 1', 'Brunch Place 2', 'Brunch Place 3', 'Brunch Place 4', 'Brunch Place 5']
    };
  }

  render() {
    return (
      <div className="resultsLists">
        {this.state.results.map( (item, i) => {
          return (<Panel>
            <Panel.Heading>
              <Panel.Title key={i}>{item}</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <li>.56 miles away!</li>
              <li> 3/4 rating!</li>
              <li>Opens at 10 am!</li>
              <li><a href="#no_go">Make reservation</a></li>
            </Panel.Body>
          </Panel>
        )
        })
        }
      </div>
    )
  }

}
export default ResultsPanel;
