import { Button, Col, Form, Row } from "react-bootstrap"

const NewGenreForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(event)
    }
    return (
        <Form className="NewGenreForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nameId">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <p className="fw-bold text-uppercase">Origins:</p>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="numberId">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="countryId">
                        <Form.Label>Country:</Form.Label>
                        <Form.Control type="text" placeholder="Type countries separated with commas" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="descriptionId">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Write a description (max 400 characters) " maxLength={400} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="linkedBandsId">
                <Form.Label>Linked Bands</Form.Label>
                <Form.Control type="text" placeholder="Type the bands separated with commas" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mainstreamId">
                <Form.Check type="checkbox" label="Is mainstream?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="childrenGenresId">
                <Form.Label>Children genres</Form.Label>
                <Form.Control type="text" placeholder="Type the genres separated with commas" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Images</Form.Label>
                <Form.Control type="text" placeholder="type URL" />
            </Form.Group>
            <Button variant="outline-info" type="submit" className="shadow">Add Genre</Button>
        </Form>
    )
}
export default NewGenreForm
