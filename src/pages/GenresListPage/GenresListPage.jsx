import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const GenresListPage = () => {
    return (
        <div className="GenresListPage">
            <h1>Soy GenresListPage</h1>
            <Link to="/genres/new">
                <Button variant="outline-info" className="shadow">Add new Genre</Button>
            </Link>
        </div>
    )
}

export default GenresListPage