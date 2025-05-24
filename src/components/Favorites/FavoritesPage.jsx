import { useState, useEffect } from 'react';
import './FavoritesPage.css';
import useFavorites from '../custom hook/useFavorites';
import { FaTrashAlt } from "react-icons/fa";

function FavoritePage() {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <div className="favorites-container">
            <h1 className='favorite-title'>My List</h1>

            {favorites.length > 0 ? (
                <div className="favorites-list">
                    {favorites.map((movie) => (
                        <div key={movie.id} className="favorite-item">
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
                        </div>
                    ))}
                </div>
            ) : (
                <p className='favorite-message'>No favorite movies yet!</p>
            )}
        </div>
    );
}

export default FavoritePage;
