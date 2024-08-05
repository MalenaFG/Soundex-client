import { Col, Container, Row } from "react-bootstrap"
import EditSongForm from "../../components/Forms/EditSongForm"

const EditSongFormPage = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <h1>Edit this song</h1>
                        <EditSongForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EditSongFormPage