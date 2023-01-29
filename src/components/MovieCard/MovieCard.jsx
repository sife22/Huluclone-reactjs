import React from "react";
import "./MovieCard.css";
import TextTruncate from "react-text-truncate";

function MovieCard({ movie }) {
  const base_url_img = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="movie_card">
      <img
        src={`${base_url_img}${movie.poster_path || movie.backdrop_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        className="movie_overview"
        truncateText="..."
        text={movie.overview}
      />
      <TextTruncate
        line={1}
        element="h2"
        className="movie_title"
        truncateText="..."
        text={movie.title}
      />
      <p className="movie_date">{movie.release_date}</p>
    </div>
  );
}

export default MovieCard;
