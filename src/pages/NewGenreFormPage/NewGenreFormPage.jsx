import { Col, Container, Row } from "react-bootstrap"
import NewGenreForm from "../../components/Forms/NewGenreForm"

const NewGenreFormPage = () => {

    return (
        <section className="NewGenreFormPage">
            <Container>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <h1 className="yellow">Add new Genre</h1>
                        <NewGenreForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewGenreFormPage