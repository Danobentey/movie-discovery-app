import React, { useEffect, useState } from "react";
import { fetchPopularMovies } from "../apiUtils/api";
import MovieCard from "./MovieCard";
import { Container } from "reactstrap";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch((err) => console.error("error fetching popular movies:" + err));
  }, []);

  return (
    <div>
      <Container className="mx-auto ">
        <div className="d-flex justify-content-between">
          <h2 className="">Featured Movies</h2>
          <h5 className=" align-item-bottom text-danger fs-25">See more &gt; </h5>
        </div>
      </Container>
      <Container className="mt-6 d-flex flex-wrap" fluid>
        {!!movies && movies.map((movie) => <MovieCard movie={movie} />)}
      </Container>
    </div>
  );
}

export default MovieList;
