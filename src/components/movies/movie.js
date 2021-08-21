import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import SearchForm from '../search/searchFrom';
import SearchResults from '../search/searchResults';
import MovieInfo from '../info/movieInfo';
import "./movie.css"


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



  return (
    <>
      <div className="header-container">
        <Link to='/' className="header-link"><h1>Movie List</h1></Link>
        <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} searchString={searchString} />
      </div>
      <Route path="/" exact render={() => <SearchResults movies={movies} />} />
      <Route path='/:id' component={MovieInfo} />
    </>
  );
}

export default Movie;