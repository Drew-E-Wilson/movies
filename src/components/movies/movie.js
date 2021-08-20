import React from 'react';
import { useEffect, useState } from 'react';


const Movie = () => {

  const [movies, setMovies] = useState({});

  const getMovieTitles = async () => {
    try {
      let response = await fetch("https://stark-tundra-95984.herokuapp.com/https://icebox-interview-api.herokuapp.com/movies/titles", {
        "method": "GET",
        "headers": {
          Accept: 'application/json',
          Authorization: 'Bearer IceboxT3st!'
        }
      })
      let data = await response.json()
      setMovies(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovieTitles();
  }, [])

  console.log(movies)

  const getMovieDetails = () => {

  }

  return (
    <>
      <h1>Movie List</h1>
    </>
  );
}

export default Movie;