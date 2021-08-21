import { Link } from 'react-router-dom';
import './searchResults.css';
import { useEffect, useState } from 'react';


export default function SearchResults({ movies }) {

    const [getImg, setImg] = useState([{ "": "" }])

    const getImageUrl = async () => {
        try {
            const response = await fetch(`https://stark-tundra-95984.herokuapp.com/https://icebox-interview-api.herokuapp.com/movies/info`, {
                "method": "GET",
                "headers": {
                    Accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await response.json()
            setImg(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getImageUrl()
    }, [])

    console.log(getImg)



    return (
        <div className="search-results">
            {movies.length === 0 ? <h3 className="intro-text">Search for your favorite movies now!<br></br> Discover actors, release dates and more for your favorite films. </h3> : movies.map((movie) => {

                return (
                    <Link to={`/${movie.id}`} key={movie.id} className="movie-link">
                        <div className="individual-movie">
                            <h2 className="movie-title">{movie.title}</h2>
                            {
                                getImg.map((img, i) => {
                                    if (img.id === movie.id) {
                                        return <img src={img.img} alt="movie poster" className="poster" key={i} />
                                    }
                                })
                            }
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}