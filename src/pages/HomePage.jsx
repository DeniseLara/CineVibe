import './HomePage.css';
import { Link } from 'react-router-dom';
import { useHomeMovies } from '../hooks/useHomeMovies';

function HomePage() {
  const { isLoading, moviesByCategory, error } = useHomeMovies();
  const categories = [
    { title: 'Trending', id: 'trending' },
    { title: 'Popular', id: 'popular' },
    { title: 'Comedy', id: 'comedy' },
    { title: 'Series', id: 'series' },
    { title: 'Romance', id: 'romance' },
  ];

  return (
    <div className="home-container">
      <h1 className="home-title">
        Discover, save, and enjoy your favorite movies
      </h1>

      {isLoading && <p className="loading">Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {!isLoading && !error && categories.map((category) => (
        <section 
          key={category.id} 
          className="category" 
          role="region" 
          aria-label={`${category.title} movies`}
        >
          <h2 className="category-title">{category.title}</h2>
          <ul className="movie-slider">
            {moviesByCategory[category.id].map((movie) => (
              <li key={movie.id} className="movie-slide">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="movie-poster"
                />
                <Link to={`/movie/${movie.id}`} className="play-button">
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

export default HomePage;