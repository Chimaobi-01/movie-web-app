

function Search({ search, setSearch }) {
    return (
        <form className="w-96 relative">
            <input
                className="w-full px-2.5 py-1.5 rounded-md border border-gray-300 bg-transparent focus:outline-none "
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="What do you want to watch?" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-2 top-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </form>
    )
}

export default Search

