import Nav from "@/components/Nav";
import { useRouter } from "next/router";

function MovieDetails({ movie }) {
    const router = useRouter()
    if(router.isFallback){
        return (
            <div className="loading">
                <span>Loading</span>
            </div>
        )
    }

    return (
        <div className="flex border bg-black text-white opacity-90">
            <div className="basis-1/4 ">
                <div >
                    <img src="/assets/Logo.png" alt="logo" />
                </div>
                <Nav src="/assets/Home.png" text="Home" />
                <Nav src="/assets/MovieProjector.png" text="Movies" />
                <Nav src="/assets/TVShow.png" text="TV Series" />
                <Nav src="/assets/Calendar.png" text="Upcoming" />
            </div>

            <div className="basis-3/4 p-10">
                <div className="h-96 w-full">
                    <img
                        className="h-full w-full object-cover rounded-xl"
                        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                        alt={movie.title}
                    />
                </div>
                <div className="flex gap-3">
                    <div className="flex flex-col gap-6 pt-4 pr-4">
                        <span>
                            <span data-testid="movie-title">{movie.title}</span> •{" "}
                            {movie.release_date.substr(0, 4)}
                            {movie.genres.map((genre, i) => (
                                <button
                                    key={i}
                                    className="w-20 h-7 rounded-2xl hover:border text-red-700 border-pink-100"
                                >
                                    {" "}
                                    {genre.name}{" "}
                                </button>
                            ))}
                        </span>
                        <p className="" data-testid="movie-overview">
                            {" "}
                            {movie.overview}{" "}
                        </p>
                        <div className="flex flex-col gap-4">
                            <p>
                                Released :{" "}
                                <span data-testid="movie-release-date">
                                    {" "}
                                    {movie.release_date}{" "}
                                </span>
                            </p>
                            <p>
                                Runtime :{" "}
                                <span data-testid="movie-runtime">{movie.runtime}mins</span>{" "}
                            </p>
                            <p>Tagline: {movie.tagline}</p>
                        </div>
                        <div className="flex justify-between items-center rounded-lg border border-stone-300">
                            <button className="bg-rose-700 rounded-lg w-64 h-14 border border-rose-700">
                                Top rated movie #65
                            </button>
                            <img src="/assets/ExpandArrow.png" alt="expand arrow" />
                        </div>
                    </div>
                    <div className="flex pt-4 gap-4 flex-col">
                        <span className=" flex items-center gap-2 justify-center">
                            {" "}
                            <img src="/assets/Star.png" /> {movie.vote_average} |{" "}
                            {movie.vote_count}k
                        </span>
                        <button className="bg-rose-700 rounded-lg w-64 h-14 border border-rose-700">
                            Top rated movie #65
                        </button>
                        <button className="relative -top-2 text-rose-700 bg-white rounded-lg w-64 h-14 border border-rose-700">
                            {" "}
                            {movie.popularity}k views{" "}
                        </button>
                        <div>
                            <img src="/assets/previewmovies.png" alt="movies preview" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;

export async function getStaticPaths() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWY3ZjhjMjM5MmQxZjRmNzgyOTk3M2IyNjk4ZWRlOCIsInN1YiI6IjY1MDBjODYzZGI0ZWQ2MTAzM2EyM2E1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvT7OvgSzHf4zXmOywW4YEK7_AZ_WvuUax5gVzlPeBI",
        },
    };

    const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
    );
    const data = await response.json();
    const paths = data.results.map((result) => {
        return {
            params: { movieid: `${result.id}` },
        };
    });
    return {
        paths,
        fallback: true,
    };
}
//   getStaticProps
export async function getStaticProps(context) {
    const { params } = context;
    const { movieid } = params;
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZWY3ZjhjMjM5MmQxZjRmNzgyOTk3M2IyNjk4ZWRlOCIsInN1YiI6IjY1MDBjODYzZGI0ZWQ2MTAzM2EyM2E1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LvT7OvgSzHf4zXmOywW4YEK7_AZ_WvuUax5gVzlPeBI",
        },
    };

    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieid}`,
        options
    );
    const data = await response.json();

    return {
        props: { movie: data },
    };
}
