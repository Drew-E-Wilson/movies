import { Link } from 'react-router-dom'

export default function SearchResults({ movies }) {
    console.log(movies)
    return (
        <div>
            {movies.length === 0 ? "No movies fitting that search criteria" : movies.map((movie) => {
                return (
                    <Link to={`/${movie.id}`} key={movie.id}><h2>{movie.title}</h2></Link>
                )
            })}
        </div>
    )
}