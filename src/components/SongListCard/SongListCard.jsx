import { Card, Col, Image, Ratio, Row } from "react-bootstrap"
import './SongListCard.css'
import { Link } from "react-router-dom"


const SongListCard = ({ title, songBy: { band }, cover, id }) => {

    return (
        <li className="SongListCard my-3 p-3 border-radius-3 rounded-4" >
            <Card body>
                <Row>
                    <Col xs={2} md={2}>
                        <Ratio aspectRatio="1x1">
                            <Image src={cover} alt={title} roundedCircle />
                        </Ratio>
                    </Col>
                    <Col md={6} className="align-content-center">
                        <Link to={`/songs/${id}`}> {title}-{band}</Link>
                    </Col>
                    <Col md={4}>
                        <Link to={`/songs/edit/${id}`}>Edit this song</Link>
                    </Col>
                </Row>
            </Card>
        </li >
    )
}
export default SongListCard