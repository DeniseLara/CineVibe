import { useState, useEffect } from 'react';

function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Guardar en localStorage cuando cambian los favoritos
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites', error);
    }
  }, [favorites]);

  // Función para verificar si una película está en favoritos
  const isFavorite = (movieId) => favorites.some(fav => fav.id === movieId);

  // Función para alternar favorito
  const toggleFavorite = (movie) => {
    setFavorites(prev => {
      if (prev.some(fav => fav.id === movie.id)) {
        return prev.filter(fav => fav.id !== movie.id);
      } else {
        return [...prev, { id: movie.id, title: movie.title, poster_path: movie.poster_path }];
      }
    });
  };

  return { favorites, isFavorite, toggleFavorite };
}

export default useFavorites;
