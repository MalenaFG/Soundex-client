import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import GenresList from "../../components/GenresList/GenresList"

const GenresListPage = () => {
    return (
        <section className="GenresListPage">
            <h1>Genres</h1>
            <GenresList />
            <Link to="/genres/new">
                <Button variant="outline-info" className="shadow">Add new Genre</Button>
            </Link>
        </section>
    )
}

export default GenresListPage