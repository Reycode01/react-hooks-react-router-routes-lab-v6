// src/pages/Actors.js
import React from 'react';

function Actors() {
  // Fetch actors data
  // Assuming actors are passed as props
  const actors = [];

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;




