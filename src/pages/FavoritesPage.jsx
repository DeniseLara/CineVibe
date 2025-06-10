import './FavoritesPage.css';
import { useFavorites } from '../hooks/useFavorites';
import { FaTrashAlt } from "react-icons/fa";

function FavoritePage() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <section className="favorites-container" aria-label="Favorite movies list">
            <h1 className='favorite-title'>My list</h1>

            {favorites.length > 0 ? (
                <ul className="favorites-list">
                    {favorites.map((movie) => (
                        <li key={movie.id} className="favorite-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={`Poster of ${movie.title}`}
                                className="favorite-image"
                            />
                            <div className="favorite-info">
                                <button
                                    className="remove-favorite"
                                    onClick={() => toggleFavorite(movie)}                                    aria-label={`Remove ${movie.title} from favorites`}
                                    type='button'
                                >
                                    <FaTrashAlt/>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='favorite-message'>No favorite movies yet!</p>
            )}
        </section>
    );
}

export default FavoritePage;
