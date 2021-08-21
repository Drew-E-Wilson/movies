export default function SearchForm() {

    return (
        <div>
            <form className="form-horizontal">
                <input
                    className="search-bar"
                    placeholder="Search"
                    type="text"
                    name="searchString"
                    required
                    placeholder="Search a movie..."
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}