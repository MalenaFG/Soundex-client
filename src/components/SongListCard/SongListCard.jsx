import { Col, Image, Ratio, Row } from "react-bootstrap"
import './SongListCard.css'


const SongListCard = ({ title, songBy, cover }) => {
    const { band } = songBy
    return (
        <li className="SongListCard my-3 bg-info-subtle p-3 border-radius-3 rounded-4" >
            <Row>
                <Col xs={2} md={2}>
                    <Ratio aspectRatio="1x1">
                        <Image src={cover} alt={title} roundedCircle />
                    </Ratio>
                </Col>
                <Col md={10} className="align-content-center">{title}-{band}</Col>
            </Row>
        </li >
    )
}
export default SongListCard