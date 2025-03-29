import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";

function MovieCard({ movie }) {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/500x750/333/aaa?text=No+Image"; // Imagen por defecto si no hay poster

    return (
        <div className="movie-card-container">
        <Link  to={`/movie/${movie.id}`} className="movie-card" title="movie">
            <img src={imageUrl} alt={movie.title} className="movie-image" />
            <div className="movie-info">
                <h3 className="movies-title">{movie.title}</h3>
                <p className="movies-rating"><span><MdStarRate/></span>{movie.vote_average?.toFixed(1) || "N/A"}</p>
            </div>
        </Link>
        </div>
    );
}

export default MovieCard;
