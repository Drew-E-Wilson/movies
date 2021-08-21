import { useEffect, useState } from 'react';
import './movieInfo.css'

export default function MovieInfo(props, { movies }) {
    console.log(movies)
    const [details, setDetails] = useState([])

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

    console.log(details)
    return (
        <div className="detail-background">
            <div className="detail-container">
                <img src={details.img} className="info_img" />
                <h3>Year Released: {details.year} | Rated: {details.rated}</h3>
                <h4>{details.description}</h4>
                <h5>Director: {details.director}</h5>
                <h5>Genres: {details.genres}</h5>
                <h5>Stars: {details.stars}</h5>
            </div>
        </div>
    )
}