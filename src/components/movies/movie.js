import React from 'react';
import { useState } from 'react';
import SearchForm from './searchFrom';
import SearchResults from '../searchResults';


const Movie = () => {

  const [movies, setMovies] = useState([]);
  const [searchString, setSearchString] = useState([''])

  const getMovieTitles = async () => {
    try {
      const response = await fetch(`https://stark-tundra-95984.herokuapp.com/https://icebox-interview-api.herokuapp.com/movies/titles/${searchString}`, {
        "method": "GET",
        "headers": {
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      })
      const data = await response.json()
      setMovies(data)
      setSearchString('')
    } catch (error) {
      console.log(error)
    }
  }

  // console.log(movies)


  const handleChange = (event) => {
    setSearchString(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovieTitles(searchString)
  }



  const getMovieDetails = () => {

  }

  return (
    <>
      <h1>Movie List</h1>
      <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
      <SearchResults movies={movies} />
    </>
  );
}

export default Movie;