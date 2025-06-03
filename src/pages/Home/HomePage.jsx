import { useEffect, useState } from 'react';
import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchComedyMovies,
  fetchRomanceMovies,
  fetchSeries,
} from '../../services/api';
import './HomePage.css';
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
        const [trending, popular, comedy, romance, series] = await Promise.all([
        fetchTrendingMovies(),
        fetchPopularMovies(),
        fetchComedyMovies(),
        fetchRomanceMovies(),
        fetchSeries(),
      ]);
      setMoviesByCategory({ trending, popular, comedy, romance, series });
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);

  const categories = [
    { title: 'Trending', id: 'trending' },
    { title: 'Popular', id: 'popular' },
    { title: 'Comedy', id: 'comedy' },
    { title: 'Series', id: 'series' },
    { title: 'Romance', id: 'romance' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">Discover, save, and enjoy your favorite movies</h1>

      {isLoading ? (
        <p className="loading">Loading...</p>  
      ) : (
      categories.map((category) => (
        <section key={category.id} className="category" role="region" aria-label={`${category.title} movies`}>
          <h2 className="category-title">{category.title}</h2>
          <ul className="movie-slider">
            {moviesByCategory[category.id].map((movie) => (
              <li key={movie.id} className="movie-slide">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="movie-poster"
                />
                {/* Botón "Ver ahora" */}
                <Link to={`/movie/${movie.id}`} className="play-button">View Details</Link>
              </li>
            ))}
          </ul>
        </section>
      ))
      )}
    </div>
  );
}

export default HomePage;