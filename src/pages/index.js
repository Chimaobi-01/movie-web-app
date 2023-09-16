import { useRouter } from "next/router"


function HomePage() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/movies')

    }
 return(
    <div className="h-screen flex justify-center items-center">
        <button className="border rounded-lg p-4" onClick={handleClick}>Popular movies</button>
    </div>
 )
}

export default HomePage