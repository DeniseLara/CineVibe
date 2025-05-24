function ActorsList({ actors }) {
  return (
    <>
      <h3 className="movie-actors">Main Actors</h3>
      <ul className="movie-actors-list">
        {actors.map(actor => (
          <li className='movie-actor' key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ActorsList;
