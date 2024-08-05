import { Col, Container, Row } from "react-bootstrap"
import EditGenreForm from "../../components/Forms/EditGenreForm"

const EditGenreFormPage = () => {

    return (
        <section className="EditGenreFormPage">
            <Container>
                <h1>Add new Genre</h1>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <EditGenreForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EditGenreFormPage