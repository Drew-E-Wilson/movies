import { Link } from 'react-router-dom'

export default function SearchResults({ movies }) {
    return (
        <div>
            {movies.map((movie) => {
                return (
                    <Link><h2 key={movie.id}>{movie.title}</h2></Link>
                )
            })}
        </div>
    )
}