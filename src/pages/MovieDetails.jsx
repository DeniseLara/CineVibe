import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useMovieDetails } from '../hooks/useMovieDetails';
import { useFavorites } from '../hooks/useFavorites';

import MovieHeader from '../components/moviedetails/MovieHeader';
import MovieInfo from '../components/moviedetails/MovieInfo';
import MoviePoster from '../components/moviedetails/MoviePoster';
import TrailerModal from '../components/moviedetails/TrailerModal';

import './Movie.css';
import ActorsList from '../components/moviedetails/ActorsList';

function Movie() {
  const { movieId } = useParams();
  const { movie, actors, videoKey } = useMovieDetails(movieId);
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isModalOpen, setIsModalOpen] = useState(false);

// Función para abrir/cerrar el modal del tráiler
const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};

if (!movie) {
    return <div>Loading...</div>;
}


  return (
    <article className="movie-details">
      <MovieHeader/>
    <div 
      className="movie-background"
      style={{
       backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path})`
      }}>
    </div>

    <section className="wrapper">
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
    </section>

     {/* Modal para mostrar el tráiler */}
      {isModalOpen && <TrailerModal videoKey={videoKey} toggleModal={toggleModal}/>}
    </article>
  );
}

export default Movie;