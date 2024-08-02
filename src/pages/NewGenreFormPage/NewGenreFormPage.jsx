import { Col, Row } from "react-bootstrap"
import NewGenreForm from "../../components/Forms/NewGenreForm"

const NewGenreFormPage = () => {

    return (
        <section className="NewGenreFormPage">
            <h1>Add new Genre</h1>
            <Row className="justify-content-center" >
                <Col md={8} lg={6}>
                    <NewGenreForm />
                </Col>
            </Row>
        </section>
    )
}

export default NewGenreFormPage