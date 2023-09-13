import MovieCard from "@/components/MovieCard"
import Link from "next/link"


function Main({ popularMovies }) {



    return (
        <div id="main" className="p-24">
            <div className="w-full h-12 justify-between items-center gap-20 flex">
                <p className="text-black text-4xl font-bold">Featured Movie</p>
                <button className="justify-start items-center gap-2 flex text-rose-700 text-lg">
                    See more
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="grid mt-11 grid-cols-4 gap-y-16 justify-items-center">
                {
                    popularMovies.map((movie) => {
                        return (
                            <div key={movie.id} className="card flex-col justify-start items-start gap-3 inline-flex ">

                                <Link href={`/${movie.id}`}>
                                    <MovieCard movie={movie} dataTestId="movie-card" />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main