import { Col, Row } from "react-bootstrap"
import NewGenreForm from "../../components/Forms/NewGenreForm"

const NewGenreFormPage = () => {

    return (
        <section className="NewGenreFormPage">
            <h1>Add new Genre</h1>
            <Row >
                <Col md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <NewGenreForm />
                </Col>
            </Row>
        </section>
    )
}

export default NewGenreFormPage