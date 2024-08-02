import { Card, Col, Image, Ratio, Row } from "react-bootstrap"
import './SongListCard.css'


const SongListCard = ({ title, songBy: { band }, cover }) => {

    return (
        <li className="SongListCard my-3 p-3 border-radius-3 rounded-4" >
            <Card body>
                <Row>
                    <Col xs={2} md={2}>
                        <Ratio aspectRatio="1x1">
                            <Image src={cover} alt={title} roundedCircle />
                        </Ratio>
                    </Col>
                    <Col md={10} className="align-content-center">{title}-{band}</Col>
                </Row>
            </Card>
        </li >
    )
}
export default SongListCard