function MoviePoster({ posterPath }) {
  const image = posterPath
    ? `https://image.tmdb.org/t/p/w1280${posterPath}`
    : "https://placehold.co/500x750/333/aaa?text=No+Image";

  return (
    <div className="movie-player">
      <img
        src={image}
        alt="Movie poster"
        className="movie-poster-details"
      />
      <div className="movie-poster-details-gradient"></div>
    </div>
  );
}

export default MoviePoster;
