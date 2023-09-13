import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"


function Home({ search, setSearch, popularMovies }) {
    return (
        <div>
            <Header search={search} setSearch={setSearch} />
            <Main popularMovies={popularMovies}/>
            <Footer />
        </div>
    )
}

export default Home