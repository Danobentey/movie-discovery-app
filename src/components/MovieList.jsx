import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../apiUtils/api';
import MovieCard from './MovieCard';
import { Container, Row } from 'reactstrap';

function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies()
            .then((data) => {
                setMovies(data);
            })
            .catch(err => console.error('error fetching popular movies:' + err))
    },[])

    
    return (
        <Container className="mt-6 d-flex flex-wrap" fluid>
            <>
            {!!movies && (
                movies.map((movie) => (
                    <MovieCard movie={movie} />
                    ))
                    )}
            </>
            
        </Container>
    );
}

export default MovieList;
