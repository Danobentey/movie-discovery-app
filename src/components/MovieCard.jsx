import React from 'react'

const MovieCard = (props) => {

  const { movieTitle, releaseDate, posterURL } = props;

  return (
    <div>
      <img src={posterURL} alt={movieTitle} data-testid="movie-poster" />
      <h2 data-testid="movie-title">{movieTitle}</h2>
      <p data-testid="movie-release-date">Realease Date: {releaseDate}</p>      
    </div>
  )
}

export default MovieCard
