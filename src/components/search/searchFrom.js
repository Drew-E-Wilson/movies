import './searchForm.css'
import { useHistory } from 'react-router-dom';

export default function SearchForm({ handleSubmit, handleChange, searchString }) {

    const history = useHistory()

    //function designed to take you back to the home page when you search for a new title
    const newSearch = () => {
        return history.push('./movies')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search a movie..."
                    onChange={handleChange}
                    value={searchString}
                    //required so you can search with a blank string
                    required
                />
                <button type="submit" className="submit-button" onClick={newSearch}>Search</button>
            </form>
        </div>
    )
}