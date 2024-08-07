import { Col, Container, Image, Ratio, Row } from "react-bootstrap"
import GenresCounter from "../../components/Counters/GenresCounter"
import SongsCounter from "../../components/Counters/SongsCounter"
import Logo from "../../assets/soundex.svg"
import { CDNIMAGES } from "../../consts/images-consts"
import "./HomePage.css"

const HomePage = () => {

    const { img2 } = CDNIMAGES

    return (
        <div className="HomePage">
            <Container>
                <h1 className="fs-1">Soundex</h1>
                <Row>
                    <Col md={{ span: 8 }} >
                        <p className="claim">Unlock New Beats: Dive into Genres You Love and Share Your Musical World.</p>
                    </Col>
                    <Col>
                        <img src={Logo} alt="Logo" className="logo" />
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <div style={{ height: '300px' }} className="imageContainer">

                            <Image src={`${img2}`} alt="cassettes" className="img-fluid w-100" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3 }} style={{ alignContent: 'flex-end' }}>
                        <h2 className="counters"><GenresCounter /></h2>
                        <p className="mb-0">Music Genres</p>
                    </Col>
                    <Col md={{ span: 3 }} style={{ alignContent: 'flex-end' }}>
                        <h2 className="counters"><SongsCounter /></h2>
                        <p className="mb-0">Songs</p>
                    </Col>
                    <Col md={{ span: 6 }} >
                        <h5 className="mb-0">Explore endless musical worlds and uncover hidden gems in your favorite genres. Share your own discoveries and join a vibrant community of music lovers!</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomePage