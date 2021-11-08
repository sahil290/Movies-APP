import React from "react";
import "./MovieSearch.css";
const MovieSearch = (props) => {
  return (
    <div>
      <header className="heading text-center mt-4 mb-4">
        Sahil's Movies Search App.
      </header>
      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col-md-6">
            <h3 className="movies-heading">Movies</h3>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="search-for-movies p-2"
              style ={{width :"600px"}}
              placeholder="Search..."
              onChange={(evt) => props.setQuery(evt.target.value)}
              value={props.value}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSearch;
