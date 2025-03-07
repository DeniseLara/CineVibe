import { useEffect, useState } from 'react';
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchComedyMovies,
  fetchRomanceMovies,
  fetchSeries,
} from './api';
import './HomePage.css';
//import SkeletonCard from './SkeletonCard'; // Importa el SkeletonCard
import { Link } from 'react-router-dom';

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesByCategory, setMoviesByCategory] = useState({
    trending: [],
    popular: [],
    comedy: [],
    romance: [],
    series: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trending = await fetchTrendingMovies();
        const popular = await fetchPopularMovies();
        const comedy = await fetchComedyMovies();
        const romance = await fetchRomanceMovies();
        const series = await fetchSeries();

        setMoviesByCategory({
          trending,
          popular,
          comedy,
          romance,
          series,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchData();
  }, []);

  const categories = [
    { title: 'Tendencias', id: 'trending' },
    { title: 'Popular', id: 'popular' },
    { title: 'Comedias', id: 'comedy' },
    { title: 'Series', id: 'series' },
    { title: 'Románticas', id: 'romance' },
  ];

  {/*useEffect(() => {
    // Simulación de carga (puedes reemplazarlo con tu lógica de carga real)
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);*/}

  return (
    <div className="home-container">
      
      <h1 className="home-title">Descubre, guarda y disfruta de tus películas favoritas</h1>
      {categories.map((category) => (
        <div key={category.id} className="category">
          <p className="category-title">{category.title}</p>
          <div className="movie-slider">
            {moviesByCategory[category.id].map((movie) => (
              <div key={movie.id} className="movie-slide">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="movie-poster"
                />
                {/* Botón "Ver ahora" */}
                <Link to={`/movie/${movie.id}`} className="play-button">Ver detalles</Link>
              </div>
            ))}
          </div>
        </div>
      )
      
      )}
    </div>
  );
}

export default HomePage;