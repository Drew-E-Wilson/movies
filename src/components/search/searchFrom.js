import './searchForm.css'

export default function SearchForm({ handleSubmit, handleChange, searchString }) {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search a movie..."
                    onChange={handleChange}
                    value={searchString}
                // required
                />
                <button type="submit" className="submit-button">Search</button>
            </form>
        </div>
    )
}