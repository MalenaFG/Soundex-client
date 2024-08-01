import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const SongsListPage = () => {
    return (
        <div className="SongsListPage">
            <h1>Soy SongsListPage y tengo un botón</h1>
            <Link to={'/songs/new'}>
                <Button variant="outline-info" className="shadow">Add new Song</Button>
            </Link>
        </div>
    )
}

export default SongsListPage