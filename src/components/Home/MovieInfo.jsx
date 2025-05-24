import { CiSaveDown2 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";

function MovieInfo({ movie, isFavorite, toggleFavorite, videoKey, toggleModal }) {
  return (
    <div className="movie-text">
      <div className="movie-principal">
        <h2 className="movie-title">{movie.title}</h2>
        <div className='movie-save' onClick={() => toggleFavorite(movie)}>
          <CiSaveDown2 className={`save-icon ${isFavorite(movie.id) ? 'saved' : ''}`} />
        </div>
      </div>

      <p className="movie-rating">Rating: {movie.vote_average}</p>
      <p className="movie-overview">{movie.overview}</p>

      {videoKey && (
        <button className="movie-button" onClick={toggleModal} aria-label="watch trailer">
          <div className="movie-icon"><FaPlay /></div>
          Watch Trailer
        </button>
      )}
    </div>
  );
}

export default MovieInfo;
