import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../apiUtils/api';
import MovieCard from './MovieCard';
import { Container } from 'reactstrap';

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
            <Container>
                <h2>Featured Movies</h2>
            </Container>
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
