
import { Card, Col, Container, Row } from "react-bootstrap"
import Logo from "../../assets/soundex.svg"
import CustomGoogleMap from '../../components/CustomGoogleMap/CustomGoogleMap'

const AboutUsPage = () => {
    return (
        <div className="AboutUsPage">
            <Container>


                <Row className='mb-5'>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h1 className="yellow">About us</h1>
                        <p className="text-center"><strong className="fs-3">Soundex</strong> was proudly code by:</p>
                    </Col>
                    <Col md={{ span: 3, offset: 3 }} >
                        <Card border="light" className='text-center'>
                            <Card.Img variant="top" src={Logo} />
                            <Card.Body>
                                <Card.Title className="yellow">MalenaFG</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <a href="https://github.com/MalenaFG" target='_blank'>https://github.com/MalenaFG</a>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col md={{ span: 3 }} >
                        <Card border="light" className='text-center'>
                            <Card.Img variant="top" src={Logo} />
                            <Card.Body>
                                <Card.Title className="yellow">SergioElmoreno</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <a href="https://github.com/sergioelmoreno" target='_blank'>https://github.com/sergioelmoreno</a>
                            </Card.Footer>
                        </Card>
                    </Col>

                </Row>

            </Container>

            <p className="text-center mb-1">at Ironhack: Tech Bootcamps en Madrid </p>
            <CustomGoogleMap />

        </div>
    )
}
export default AboutUsPage