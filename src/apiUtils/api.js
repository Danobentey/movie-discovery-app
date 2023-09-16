import axios from 'axios';

const API_KEY = '0bf6a21303e6ef0512e72fe869df3cb2';
const BASE_URL = 'https://api.themoviedb.org/3';

class Movie {
  constructor (id, title, releaseDate, posterURL) {
      this.id = id;
      this.title = title;
      this.releaseDate = releaseDate;
      this.posterURL = posterURL
  }
}

// Function to fetch popular movies
export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    console.log(response.data.results)
    const movies = response.data.results.map((movie) => {
      return new Movie(movie.id, movie.title, movie.release_date, movie.poster_path)
    } )
    return movies
  } catch (error) {
    throw error;
  }
};

// Function to search for movies by title
export const searchMoviesByTitle = async (title) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${title}`
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

// Function to fetch movie details by ID
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
