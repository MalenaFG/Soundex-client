import { Col, Container, Row } from "react-bootstrap"
import GenresCounter from "../../components/Counters/GenresCounter"
import SongsCounter from "../../components/Counters/SongsCounter"

const HomePage = () => {
    return (
        <div className="HomePage">
            <Container>
                <h1>Soundex</h1>
                <p>Unlock New Beats: Dive into Genres You Love and Share Your Musical World.</p>
                <Row>
                    <Col md={{ span: 3 }}>
                        <h2><GenresCounter /></h2>
                        <p>
                            Music Genres
                        </p>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <h2><SongsCounter /></h2>
                        <p>Songs</p>
                    </Col>
                    <Col md={{ span: 6 }} >
                        <h5>Explore endless musical worlds and uncover hidden gems in your favorite genres. Share your own discoveries and join a vibrant community of music lovers!</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage