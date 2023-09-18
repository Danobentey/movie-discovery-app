import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {

  const { title, releaseDate, posterURL } = movie;

  return (
    <div className='movie_card' onClick={() => {}}>
      <img src={`https://image.tmdb.org/t/p/w185${posterURL}`} alt={title} data-testid="movie-poster" />
      <h3 data-testid="movie-title">{title}</h3>
      <p data-testid="movie-release-date">Relesae: {releaseDate}</p>      
    </div>
  )
}

export default MovieCard
