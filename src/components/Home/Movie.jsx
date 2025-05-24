import { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import useMovieDetails from './useMovieDetails';
import useFavorites from '../custom hook/useFavorites';

/*import { IoIosArrowRoundBack } from "react-icons/io";
import { CiSaveDown2 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";*/

import MovieHeader from './MovieHeader';
import MovieInfo from './MovieInfo';
import MoviePoster from './MoviePoster';
import TrailerModal from './TrailerModal';

import './Movie.css';
import ActorsList from './ActorsList';

function Movie() {
  const { movieId } = useParams();
  const { movie, actors, videoKey } = useMovieDetails(movieId);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isModalOpen, setIsModalOpen] = useState(false);

// Función para abrir/cerrar el modal del tráiler
const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};

const handleSaveClick = () => {
  toggleFavorite(movie);
};


if (!movie) {
    return <div>Loading...</div>;
}

  return (
    <div className="movie-details">
      <MovieHeader/>
    <div 
      className="movie-background"
      style={{
       backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path})`
      }}>
    </div>

    
       <div className="wrapper">
        <MoviePoster posterPath={movie.poster_path}/>
     <div className="movie">
      <MovieInfo 
        movie={movie}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        videoKey={videoKey}
        toggleModal={toggleModal}/>
        <ActorsList actors={actors}/>
      </div>
    </div>

   {/* Modal para mostrar el tráiler */}
            {isModalOpen && <TrailerModal videoKey={videoKey} toggleModal={toggleModal}/>}
        </div>
    );
}

export default Movie;