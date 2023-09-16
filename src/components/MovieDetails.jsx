import React, { useEffect, useState } from 'react'

const MovieDetails = (props) => {
  // Access movie ID from props
  const movieId = props.match.params.id;

  //Define state variables for movie details and loading state
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //fetch movie details based on the movieId and update state
  useEffect(() => {
    // Fetch movie details using the TMDB API
    // Update state with the fetched data
  }, movieId)

  return (
    <div>
      
    </div>
  )
}

export default MovieDetails
