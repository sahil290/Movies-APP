import React from "react";
import "./Movies.css";
const Movie = (props) => {
  return (
    <>
      <div className="container p-5 d-flex justify-content-center">
        <div className="row">
          {props.movies.map((movie, index) => (
            <div className="col-md-4 mb-5 text-center">
              <div className="card" style={{ width: "18rem", height :"40rem" }}>
                <img key = {index.imdbID}src={movie.Poster} className="card-img-top img-thumbnail img-fluid" alt="Poster" />
                <div className="card-body">
                  <h4 className="card-title">{movie.Title}</h4>
                  <h5 className="year">Released in {movie.Year}</h5>
                </div>
                <a href="favorites" className = "btn btn-info mb-2">Add to Favorites</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
