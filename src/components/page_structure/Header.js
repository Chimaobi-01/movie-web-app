import NavBar from "./NavBar"



function Header({ search, setSearch, allMovies }) {
    return (
        <div id="header" className="bg-black text-white w-screen h-screen relative pl-24 flex items-center bg-opacity-50 john">
            <NavBar search={search} setSearch={setSearch} allMovies={allMovies}/>
            
            <div className="flex flex-col justify-start items-start gap-4 w-96">
                <h1 className=" text-5xl font-bold leading-10">John Wick 3 : Parabellum</h1>
                <small className="flex gap-8">
                    <span className="flex gap-2">
                        <img src="assets/imdb.png" alt="imdc logo"/>
                        86.0&nbsp;/&nbsp;100
                    </span>
                    <span className="flex gap-2">
                        <img src="assets/orange.png" />
                        97%
                    </span>
                </small>
                <p className="w-72 text-sm font-medium leading-none">John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                <button className=" px-4 py-2 bg-rose-700 rounded-md justify-start items-center gap-2 inline-flex text-white text-sm font-bold uppercase">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z" fill="white" />
                    </svg>
                    Watch trailer
                </button>
            </div>
        </div>
    )
}

export default Header