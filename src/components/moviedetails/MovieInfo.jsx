import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";

import StarRating from './StarRating'


function MovieInfo({ movie, isFavorite, toggleFavorite, videoKey, toggleModal }) {

  return (
    <section className="movie-text">
      <h2 className="movie-title">{movie.title}</h2>

      <div className="movie-principal">
        <div className="movie-rating">
          <StarRating rating={movie.vote_average} />
        </div>
       <button 
          className='movie-save'
          type="button" 
          onClick={() => toggleFavorite(movie)}
          aria-pressed={isFavorite(movie.id)}
          aria-label={isFavorite(movie.id) ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite(movie.id) ? (
           <BsBookmarkFill className="save-icon saved" />
          ) : (
           <BsBookmark className="save-icon" />
          )}        
        </button>
      </div>

      <p className="movie-overview">{movie.overview}</p>

      {videoKey && (
        <button 
          className="movie-button" 
          onClick={toggleModal} 
          aria-label="watch trailer"
        >
          <span className="movie-icon"><FaPlay /></span>
          Watch Trailer
        </button>
      )}
    </section>
  );
}

export default MovieInfo;
