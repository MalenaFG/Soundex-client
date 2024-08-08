import { Button, Card, Col, Image, ListGroup, Ratio, Row } from "react-bootstrap"
import './SongListCard.css'
import { Link } from "react-router-dom"
import StarsRating from "../StarsRating/StarsRating"



const SongListCard = ({ title, songBy: { band }, cover, id, rate }) => {


    return (
        <ListGroup.Item variant="flush" className="SongListCard" >
            <Card body >
                <Row >
                    <Col xs={3} md={3} className="align-items-center d-flex justify-content-center">
                        <Ratio aspectRatio="1x1">
                            <Image src={cover} alt={title} rounded />
                        </Ratio>
                    </Col>
                    <Col md={6} className=" d-flex align-items-center">
                        <Button as={Link} to={`/songs/${id}`} variant="outline-light" size="sm"> {title} - {band}</Button>
                    </Col>
                    <Col md={3} className="align-items-center d-flex justify-content-center">
                        <StarsRating stars={rate} id={id} />
                    </Col>
                </Row>


            </Card>

        </ListGroup.Item >
    )
}
export default SongListCard