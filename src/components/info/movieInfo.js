import { useEffect, useState } from 'react';
import './movieInfo.css'

export default function MovieInfo(props, { movies }) {
    console.log(movies)
    const [details, setDetails] = useState([])

    // fetching to get the movie details so I can display them on the page
    const getMovieDetails = async () => {
        try {
            const response = await fetch(`https://stark-tundra-95984.herokuapp.com/https://icebox-interview-api.herokuapp.com/movies/${props.match.params.id}`, {
                "method": "GET",
                "headers": {
                    Accept: 'application/json',
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                }
            })
            const data = await response.json()
            setDetails(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMovieDetails()
    }, [])

    return (
        <div className="detail-background">
            <div className="detail-container">
                <img src={details.img} className="info_img" alt="" />
                <h3 className="year-description">Year Released: {details.year} | Rated: {details.rated}</h3>
                <h4 className="movie-description">{details.description}</h4>
                <h5>Director: {details.director}</h5>
                <h5>Genres: {details.genres}</h5>
                <h5>Stars: {details.stars}</h5>
            </div>
        </div>
    )
}