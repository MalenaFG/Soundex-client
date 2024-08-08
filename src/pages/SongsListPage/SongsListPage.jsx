import { Button, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import SongsList from "../../components/SongsList/SongsList"

const SongsListPage = () => {
    return (
        <section className="SongsListPage">
            <Container>

                < div className="d-flex justify-content-between mb-4" >

                    <h1 className="yellow">Songs</h1>

                    <div className="d-flex justify-content-end mb-3">

                        <Button as={Link} to={'/songs/new'} variant="light" className="shadow">Add new Song</Button>

                    </div>

                </div>
                <SongsList />

            </Container>
        </section>
    )
}

export default SongsListPage