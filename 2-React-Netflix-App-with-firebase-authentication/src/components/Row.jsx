import axios from "../axios/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchedData = async () => {
      const response = await axios.get(fetchUrl);
      //   console.log(response.data.results);
      setMovies(response.data.results);
      return response; // good practice
    };
    fetchedData();
  }, [fetchUrl]);

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) =>
          (isLargeRow && movie.poster_path) ||
          (!isLargeRow && movie.backdrop_path) ? (
            <div className="row__posterContainer" key={movie.id}>
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              {!isLargeRow && (
                <p className="row__movieTitle">
                  {movie.name || movie.original_title || movie.title}
                </p>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Row;
