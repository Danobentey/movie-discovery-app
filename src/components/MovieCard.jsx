import React from 'react'

const MovieCard = ({ movie }) => {

  const { title, releaseDate, posterURL } = movie;

  return (
    <div className=''>
      <img src={`https://image.tmdb.org/t/p/w154${posterURL}`} alt={title} data-testid="movie-poster" />
      <h3 data-testid="movie-title">{title}</h3>
      <p data-testid="movie-release-date">Realease Date: {releaseDate}</p>      
    </div>
  )
}

export default MovieCard
