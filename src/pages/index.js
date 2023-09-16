import Home from "@/components/page_structure/Home";
import { useState } from "react";

function Index({ movies }) {
  const [search, setSearch] = useState("");
  const popularMovies = movies.results.slice(0, 10);
  

  return (
    <>
      <Home
        search={search}
        setSearch={setSearch}
        popularMovies={popularMovies}
        allMovies={movies}
      />
    </>
  );
}

export default Index;

export async function getStaticProps() {
  
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
    ).then(res => res.json())
    
  return {
    props: { movies: response },
  };
}
