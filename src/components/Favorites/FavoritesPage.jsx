import React, { useState, useEffect } from 'react';
import './FavoritesPage.css';

function FavoritePage() {
    // Estado para los favoritos
    const [favorites, setFavorites] = useState([]);


    // Función para eliminar un favorito
    const removeFavorite = (movieId) => {
        const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    // Cargar favoritos desde localStorage cuando el componente se monta
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    return (
        <div className="favorites-container">
            <h1 className='favorite-title'>My List</h1>

            {favorites.length > 0 ? (
                <div className="favorites-list">
                    {favorites.map((movie) => (
                        <div key={movie.id} className="favorite-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="favorite-image"
                            />
                            <div className="favorite-info">
                                {/*<h3>{movie.title}</h3>*/}
                                <button
                                    className="remove-favorite"
                                    onClick={() => removeFavorite(movie.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorite movies yet!</p>
            )}
        </div>
    );
}

export default FavoritePage;
