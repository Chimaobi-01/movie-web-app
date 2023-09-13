import Link from "next/link";


function Search({ search, setSearch, allMovies }) {
  return (
    <form className="w-3/6 relative">
      <input
        className="w-full px-2.5 py-1.5 rounded-md border border-gray-300 bg-transparent focus:outline-none "
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="What do you want to watch?"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute right-2 top-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      {/* search content */}
      <div className="absolute top-10 px-1 rounded-lg bg-black opacity-70 text-white w-full  overflow-y-auto">
        {allMovies.results.filter(movie => search === '' ? null : movie.title.toLowerCase().includes(search.toLowerCase())).map(movie => {
          return (
            <Link href={`/${movie.id}`}>
              <div key={movie.id} className="flex gap-2 h-24 w-full m-2 z-10 cursor-pointer hover:opacity-10">
                <div className="basis-1/6 h-full">
                  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="w-full h-full object-cover" alt="movie poster" />
                </div>
                <div className="basis-5/6 h-full p-2">
                  <h4 className="font-bold text-lg"> {movie.title} </h4>
                  <span className="text-sm text-slate-400">this is a detail highlight of the movie</span>
                </div>
              </div>
            </Link>

          )
        })}



      </div>
    </form>
  );
}

export default Search;
