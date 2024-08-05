import { Button, Card, Col, Image, Ratio, Row } from "react-bootstrap"
import './SongListCard.css'
import { Link } from "react-router-dom"


const SongListCard = ({ title, songBy: { band }, cover, id }) => {

    return (
        <li className="SongListCard my-3 p-3 border-radius-3 rounded-4" >
            <Card body >
                <Row >
                    <Col xs={2} md={2} className="align-items-center d-flex justify-content-center">
                        <Ratio aspectRatio="1x1">
                            <Image src={cover} alt={title} roundedCircle />
                        </Ratio>
                    </Col>
                    <Col md={6} className="align-items-center d-flex justify-content-center">
                        <Button as={Link} to={`/songs/${id}`} variant="outline-info" size="lg"> {title}-{band}</Button>
                    </Col>
                    <Col md={4} className="align-items-center d-flex justify-content-center">
                        <Button as={Link} to={`/songs/edit/${id}`} variant="info">Edit this song</Button>
                    </Col>
                </Row>
            </Card>
        </li >
    )
}
export default SongListCard