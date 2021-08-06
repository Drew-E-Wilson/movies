import React from 'react';

class Movie extends React.Component{
  movies = [
    {
      title: 'Luca',
      year: 2021,
      rating: 10,
      img: 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg',
      stars: 'Jacob Tremblay, Jack Dylan Grazer',
    },
    {
      title: 'Lion King',
      year: 2019,
      rating: 4,
      img: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg',
      stars: 'Donald Glover, Beyoncé'
    },
    {
      title: 'Cars',
      year: 2006,
      rating: 8,
      img: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_.jpg',
      stars: 'Owen Wilson, Bonnie Hunt'
    },
    {
      title: 'Pocahontas',
      year: 1995,
      rating: 9,
      img: 'https://m.media-amazon.com/images/M/MV5BMzc4YzhiN2ItY2Y4NC00YTA0LWEyMjEtNzllNTcxZDdjODhiXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg',
      stars: 'Mel Gibson, Linda Hunt'
    },
    {
      title: 'The Incredibles',
      year: 2004,
      rating: 7,
      img: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_.jpg',
      stars: 'Craig T. Nelson, Samuel L. Jackson'
    },
    {
      title: 'Cinderella',
      year: 1950,
      rating: 5,
      img: 'https://m.media-amazon.com/images/M/MV5BMWE3NzMxZTYtZTUyYi00ZTMzLTg2MzEtZjg0NGM3ZDJjZDg2XkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_.jpg',
      stars: 'Ilene Woods, James MacDonald'
    },
  ]


  handleInput = () => {}

  getMovieTitles =  () => {}

  getMovieDetails =  () => {}

  render(){
    return(
      <>
      <h1>Movie list</h1>
        <input/>
        <button>Submit</button>
      </>
    )
  }
}

export default Movie