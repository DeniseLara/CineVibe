const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Función genérica para hacer peticiones a la API
const fetchData = async (endpoint, queryParams = '') => {
  const url = `${BASE_URL}${endpoint}?api_key=${API_KEY}${queryParams ? `&${queryParams}` : ''}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetching data from ${url}`);
  }
  const data = await response.json();
  return data.results || [];
};

// Nueva función para buscar películas
export const searchMovies = async (query) => {
  return fetchData('/search/movie', `query=${query}`);
};

// Función para obtener detalles de una película
export const getMovieDetails = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Error fetching movie details');
  }
  return response.json();
};

// Función para obtener los créditos (actores) de una película
export const getMovieCredits = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Error fetching movie credits');
  }
  return response.json();
};

// Función para obtener los videos de una película
export const getMovieVideos = async (movieId) => {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Error fetching movie videos');
  }
  const data = await response.json();

  console.log("Videos de la película:", data.results); // 🔥 Agrega esto para depuración

  // Filtrar solo videos de YouTube
  const youtubeVideos = data.results.filter(video => video.site === "YouTube");

  if (youtubeVideos.length === 0) return null;

  // Buscar primero un tráiler, si no hay, buscar un teaser
  const trailer = youtubeVideos.find(video => video.type === "Trailer");
  const teaser = youtubeVideos.find(video => video.type === "Teaser");

  const videoList = trailer ? [trailer, ...youtubeVideos] : teaser ? [teaser, ...youtubeVideos] : youtubeVideos;

  // Probar cada video hasta encontrar uno válido
  for (let video of videoList) {
    try {
      const testUrl = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${video.key}&format=json`;
      const testResponse = await fetch(testUrl);
      if (testResponse.ok) {
        console.log(`✅ Video válido encontrado: ${video.key}`);
        return video.key; // Retorna el primer video que sí funcione
      }
    } catch (error) {
      console.log(`❌ Video no válido: ${video.key}`);
    }
  }

  return null; // Si ninguno funciona, devolver null
};


// Obtener películas tendencia
export const fetchTrendingMovies = async () => {
  return fetchData('/trending/movie/day');
};

// Obtener películas populares
export const fetchPopularMovies = async () => {
  return fetchData('/movie/popular');
};

// Obtener películas de comedia (género ID: 35)
export const fetchComedyMovies = async () => {
  return fetchData('/discover/movie', 'with_genres=35');
};

// Obtener películas románticas (género ID: 10749)
export const fetchRomanceMovies = async () => {
  return fetchData('/discover/movie', 'with_genres=10749');
};

// Obtener series populares
export const fetchSeries = async () => {
  return fetchData('/tv/popular');
};