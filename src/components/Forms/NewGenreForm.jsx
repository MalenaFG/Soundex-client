import { Form } from "react-bootstrap"

const NewGenreForm = () => {
    return (
        <Form className="NewGenreForm">
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Fila 1</Form.Label>
                <Form.Control type="text" placeholder="algo" />
            </Form.Group>
        </Form>
    )
}
export default NewGenreForm