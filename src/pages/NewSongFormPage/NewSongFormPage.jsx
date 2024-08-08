import { Col, Container, Row } from "react-bootstrap"
import NewSongForm from "../../components/Forms/NewSongForm"

const NewSongFormPage = () => {
    return (
        <section className="NewSongFormPage">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <h1 className="yellow">Add new song</h1>
                        <NewSongForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewSongFormPage