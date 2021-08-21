export default function SearchForm({ handleSubmit, handleChange, searchString }) {

    return (
        <div >
            <form className="form-horizontal" onSubmit={handleSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search a movie..."
                    onChange={handleChange}
                    value={searchString}
                    required
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}