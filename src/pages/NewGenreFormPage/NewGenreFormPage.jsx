import { Col, Container, Row } from "react-bootstrap"
import NewGenreForm from "../../components/Forms/NewGenreForm"

const NewGenreFormPage = () => {

    return (
        <section className="NewGenreFormPage">
            <Container>
                <h1>Add new Genre</h1>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <NewGenreForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewGenreFormPage