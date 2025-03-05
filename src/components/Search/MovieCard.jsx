import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";

function MovieCard({ movie }) {
    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image"; // Imagen por defecto si no hay poster

    return (
        <Link  to={`/movie/${movie.id}`} className="movie-card">
            <img src={imageUrl} alt={movie.title} className="movie-image" />
            <div className="movie-info">
                <h3 className="movies-title">{movie.title}</h3>
                {/*<p className="movie-release">📅 {movie.release_date || "Fecha desconocida"}</p>*/}
                <p className="movies-rating"><div><MdStarRate/></div>{movie.vote_average?.toFixed(1) || "N/A"}</p>
            </div>
        </Link>
    );
}

export default MovieCard;
