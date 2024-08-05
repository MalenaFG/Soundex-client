import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import GenresList from "../../components/GenresList/GenresList"

const GenresListPage = () => {
    return (
        <section className="GenresListPage">

            <Container>
                <div className="d-flex justify-content-between">
                    <h1>Genres</h1>
                    <div className="d-flex justify-content-end mb-3">
                        <Link to="/genres/new">
                            <Button variant="info" className="shadow" size="lg">Add new Genre</Button>
                        </Link>
                    </div>
                </div>

                <GenresList />

            </Container>

        </section>
    )
}

export default GenresListPage