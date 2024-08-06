import { Button, Card, Col, Image, ListGroup, Ratio, Row } from "react-bootstrap"
import './SongListCard.css'
import { Link } from "react-router-dom"
import StarsRating from "../StarsRating/StarsRating"


const SongListCard = ({ title, songBy: { band }, cover, id }) => {


    return (
        <ListGroup.Item variant="flush" className="SongListCard" >

            <Row >
                <Col xs={2} md={2} className="align-items-center d-flex justify-content-center">
                    <Ratio aspectRatio="1x1">
                        <Image src={cover} alt={title} roundedCircle />
                    </Ratio>
                </Col>
                <Col md={6} className="align-items-center d-flex">
                    <Button as={Link} to={`/songs/${id}`} variant="outline-info" size="lg"> {title}-{band}</Button>
                    <StarsRating />
                </Col>
                <Col md={4} className="align-items-center d-flex justify-content-center">
                    <Button as={Link} to={`/songs/edit/${id}`} variant="info">Edit this song</Button>
                </Col>
            </Row>

        </ListGroup.Item >
    )
}
export default SongListCard