function MovieCard({ movie, dataTestId }) {
  return (
    <>
      <div data-testid={dataTestId} className="w-64 h-96 relative">
        <div className="w-64 h-96 left-0 top-0 absolute">
          <div className="w-64 h-96 left-0 top-0 absolute bg-stone-300" />
          <img
            data-testid="movie-poster"
            className="w-64 h-96 left-0 top-0 object-cover absolute"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
        </div>
        <div className="w-56 h-7 left-[16px] top-[15.58px] absolute justify-center items-center gap-28 inline-flex">
          <div className="self-stretch px-2 py-0.5 bg-gray-100 bg-opacity-50 rounded-xl backdrop-blur-none justify-start items-start gap-2.5 inline-flex">
            <div className="text-gray-900 text-xs font-bold">TV SERIES</div>
          </div>
          <div className="w-7 h-7 relative">
            <div className="w-7 h-7 left-0 top-0 absolute bg-gray-100 bg-opacity-50 rounded-full backdrop-blur-none" />
            <svg
              className="w-5 h-5 left-[5px] top-[4.87px] absolute"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.17157 5.48284C4.73367 3.96185 7.26633 3.96185 8.82842 5.48284L9.99999 6.62359L11.1716 5.48284C12.7337 3.96185 15.2663 3.96185 16.8284 5.48284C18.3905 7.00383 18.3905 9.46984 16.8284 10.9908L9.99999 17.6396L3.17157 10.9908C1.60948 9.46984 1.60948 7.00383 3.17157 5.48284Z"
                fill="#D1D5DB"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        data-testid="movie-release-date"
        className="text-gray-400 text-xs font-bold flex justify-between"
      >
        Release: {movie.release_date}
      </div>
      <h4
        data-test="movie-title"
        className="w-64 text-gray-900 text-lg font-bold"
      >
        {movie.title}
      </h4>
      <div className="w-64 justify-between items-start gap-8 inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <img className="w-9 h-4" src="assets/imdb.png" alt="imbd logo" />

          <div className="text-gray-900 text-xs font-normal leading-3">
            {movie.vote_average} / 100
          </div>
        </div>
        <div className="justify-start items-center gap-2.5 flex">
          <img className="w-4 h-4" src="assets/orange.png" alt="tomatoes" />

          <div className="text-gray-900 text-xs font-normal leading-3">97%</div>
        </div>
      </div>
      <div className="text-gray-400 text-xs font-bold">
        Action, Adventure, Horror
      </div>
    </>
  );
}

export default MovieCard;
