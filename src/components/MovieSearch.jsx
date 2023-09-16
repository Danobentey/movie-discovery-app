import React, { useState } from 'react';
import { InputGroup, Input, Button } from 'reactstrap';

const MovieSearch = () => {
  // Define state variables for search query, search results, and loading state
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <InputGroup>
        <Input /> 
        <Button className='btn btn-primary' >S</Button>
      </InputGroup>
    </div>
  )
}

export default MovieSearch
