import React, { useState, useEffect } from "react";
import MovieSearch from "./Components/MovieSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import Movie from "./Movie";
import "./App.css";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const getMovies = async (query) => {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=69c172dd`;
    const res = await fetch(url);
    const resJson = await res.json();
    if (resJson.Search) {
      setMovies(resJson.Search);
      setQuery("");
    }
  };
  useEffect(() => {
    getMovies(query);
  }, [query]);
  return (
    <div className="app">
      <MovieSearch
        query={query}
        setQuery={setQuery}
      />
      <Movie
      movies={movies}
      setMovies={setMovies} />
    </div>
  );
};

export default App;
