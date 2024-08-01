import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const GenreCardPage = () => {
    return (
        <div className="GenreCardPage">
            <h1>Soy GenreCardPage y tengo este botón</h1>
            <Link to={'/songs/new'}>
                <Button variant="outline-info" className="shadow">Add new Song</Button>
            </Link>
        </div>
    )
}
export default GenreCardPage