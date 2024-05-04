// src/pages/Movie.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Movie() {
  const { id } = useParams();

  // Fetch movie data based on id

  return (
    <div>
      <h1>Movie Page</h1>
      <p>Movie ID: {id}</p>
      {/* Fetch and render movie details here */}
    </div>
  );
}

export default Movie;
