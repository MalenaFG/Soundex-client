import { Col, Container, Row } from "react-bootstrap"
import EditGenreForm from "../../components/Forms/EditGenreForm"

const EditGenreFormPage = () => {

    return (
        <section className="EditGenreFormPage">
            <Container>
                <Row >
                    <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                        <h1 className="yellow">Edit Genre data</h1>
                        <EditGenreForm />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default EditGenreFormPage