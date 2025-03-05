import React, { useState, useEffect } from 'react';
import useMovieDetails from './useMovieDetails';
import './Movie.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { CiSaveDown2 } from "react-icons/ci";
import { FaPlay } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";


function Movie() {
    const { movieId } = useParams();

  const { movie, actors, videoKey } = useMovieDetails(movieId);

   // Estado para saber si la película está en favoritos
   const [isFavorite, setIsFavorite] = useState(false);
  
   // Estado para manejar el modal del tráiler
   const [isModalOpen, setIsModalOpen] = useState(false);

   // Cargar estado de favoritos al montar el componente
   useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(savedFavorites.some(fav => fav.id === movie?.id));
}, [movie]);

// Función para alternar favoritos
const toggleFavorite = () => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let updatedFavorites;

    if (isFavorite) {
        // Eliminar de favoritos
        updatedFavorites = savedFavorites.filter(fav => fav.id !== movie.id);
    } else {
        // Agregar a favoritos
        updatedFavorites = [...savedFavorites, { id: movie.id, title: movie.title, poster_path: movie.poster_path }];
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
};

 // Función para abrir/cerrar el modal del tráiler
 const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};


  if (!movie) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="movie-details container">

       <Link to="/" className="back-arrow-link">
      <div className="back-arrow">
        <IoIosArrowRoundBack />
      </div>
    </Link>

    <div 
  className="movie-background"
  style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path || movie.poster_path})`
  }}>
  </div>

    
       <div className="wrapper">
        <div className="movie-player">
            <img
                  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="movie-poster-details"
                />
                  <div className="movie-poster-details-gradient"></div>
      
        </div>
    
     <div className="movie">
      <div className="movie-text">
      <h2 className="movie-title">{movie.title}</h2>

      <div className='movie-save' onClick={toggleFavorite}>
        < CiSaveDown2 className={`save-icon ${isFavorite ? 'saved' : ''}`} />
        </div>

      <p className="movie-rating">Calificación: {movie.vote_average}</p>
      <p className="movie-overview">{movie.overview}</p>

      {videoKey && (
                            <button className="movie-button" onClick={toggleModal}>
                                <div className="movie-icon">
                                    <FaPlay />
                                </div>
                                Watch Trailer
                            </button>
                        )}

      <h3 className="movie-actors">Actores Principales</h3>
      <ul className="movie-actors-list">
        {actors.map((actor) => (
          <li className='movie-actor' key={actor.id}>
            <div>{actor.name}</div>
            </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
   {/* Modal para mostrar el tráiler */}
            {isModalOpen && (
                <div className="modal-overlay active">
                    <div className="modal-content">
                        <button className="close-modal" onClick={toggleModal}>
                          <div className="modal-icon"><IoCloseOutline/></div>
                          </button>
                          <div className="modal-video-container">
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/${videoKey}`}
                            title="Movie Trailer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Movie;