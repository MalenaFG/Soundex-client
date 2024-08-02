import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import SongsList from "../../components/SongsList/SongsList"

const SongsListPage = () => {
    return (
        <section className="SongsListPage">
            <Container>
                <h1>Songs</h1>
                <SongsList />

                <Link to={'/songs/new'}>
                    <Button variant="outline-info" className="shadow">Add new Song</Button>
                </Link>
            </Container>
        </section >
    )
}

export default SongsListPage