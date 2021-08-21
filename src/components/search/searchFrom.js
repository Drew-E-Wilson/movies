import './searchForm.css'
import { useHistory } from 'react-router-dom';

export default function SearchForm({ handleSubmit, handleChange, searchString }) {

    const history = useHistory()

    const newSearch = () => {
        return history.push('./')
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
                    required
                />
                <button type="submit" className="submit-button" onClick={newSearch}>Search</button>
            </form>
        </div>
    )
}