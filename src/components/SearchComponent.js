import React from 'react';
import '../css/App.css';

class SearchComponent extends React.Component {

  render() {
    return (
      <div className="searchBox">
        <h2>Where do you want to eat brunch today?</h2>
        <input type="text" placeholder="Type your favorite breakfood..."/>

        <div className="filterBox">

          <div className="filterHeading">
              <p>Filter by:</p>
          </div>

          <div className="filterOptions">
            <div className="checkbox">
              <label><input type="checkbox" value=""/>Proximity</label>
            </div>
            <div className="checkbox">
              <label><input type="checkbox" value=""/>Ratings</label>
            </div>
            <div className="checkbox">
              <label><input type="checkbox" value=""/>Buffet/A la carte</label>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default SearchComponent;
