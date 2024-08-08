import { Button, Col, Container, Image, Ratio, Row } from "react-bootstrap"
import GenresCounter from "../../components/Counters/GenresCounter"
import SongsCounter from "../../components/Counters/SongsCounter"
import Logo from "../../assets/soundex.svg"
import { CDNIMAGES } from "../../consts/images-consts"
import "./HomePage.css"
import { Link } from "react-router-dom"

const HomePage = () => {

    const { img1, img2, img3, img4, img5, img6, img7 } = CDNIMAGES

    return (
        <div className="HomePage">
            <Container>
                <h1 className="yellow fs-1">Soundex</h1>
                <Row className="mb-4">
                    <Col md={{ span: 8 }} className="d-flex align-items-center" >
                        <p className="claim">Unlock New Beats: Dive into Genres You Love and Share Your Musical World.</p>
                    </Col>
                    <Col className="d-flex align-items-end">
                        <img src={Logo} alt="Logo" className="logo" />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md={{ span: 6 }} className="mb-4">
                        <div style={{ height: '300px' }} className="imageContainer">
                            <Image src={`${img7}`} alt="cassettes" className="img-fluid w-100" />
                        </div>
                    </Col>
                    <Col md={{ span: 6 }} className="p-4">

                        <Row className="align-items-center h-100">
                            <Col md={{ span: 6 }} style={{ alignContent: 'flex-end' }} >
                                <h2 className="counters yellow"><GenresCounter /></h2>
                                <p className="mb-0 fw-bold">Music Genres</p>
                            </Col>
                            <Col md={{ span: 6 }} style={{ alignContent: 'flex-end' }} >
                                <h2 className="counters yellow"><SongsCounter /></h2>
                                <p className="mb-0 fw-bold">Songs</p>
                            </Col>
                            <Col md={{ span: 12 }} className="d-flex align-items-center" >
                                <h5 className="mb-0">Explore endless musical worlds and uncover hidden gems in your favorite genres. Share your own discoveries and join a vibrant community of music lovers!</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Col className="d-flex justify-content-center">
                        <Button as={Link} to={`/genres`} className="" variant="outline-light" size="lg">Music genres</Button>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Button as={Link} to={`/songs`} variant="outline-light" size="lg">Songs</Button>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default HomePage