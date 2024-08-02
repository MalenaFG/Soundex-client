import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"

const NewGenreForm = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        date: 0,
        countries: "",
        description: "",
        linkedBands: "",
        isMainstream: false,
        childrenGenres: "",
        images: ""
    })
    const handleFormData = event => {
        const { value, name } = event.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(event)
    }
    return (
        <Form className="NewGenreForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nameId">
                <Form.Label>Name:</Form.Label>
                <Form.Control onChange={handleFormData} type="text" placeholder="Enter name" name="name" />
            </Form.Group>
            <p className="fw-bold text-uppercase">Origins:</p>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="numberId">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control onChange={handleFormData} type="number" name="date" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3" controlId="countryId">
                        <Form.Label>Country:</Form.Label>
                        <Form.Control onChange={handleFormData} type="text" placeholder="Type countries separated with commas" name="countries" />
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="descriptionId">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" onChange={handleFormData} rows={3} placeholder="Write a description (max 400 characters) " maxLength={400} name="description" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="linkedBandsId">
                <Form.Label>Linked Bands</Form.Label>
                <Form.Control onChange={handleFormData} type="text" placeholder="Type the bands separated with commas" name="linkedBands" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mainstreamId">
                <Form.Check onChange={handleFormData} type="checkbox" label="Is mainstream?" name="isMainstream" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="childrenGenresId">
                <Form.Label>Children genres</Form.Label>
                <Form.Control onChange={handleFormData} type="text" placeholder="Type the genres separated with commas" name="childrenGenres" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Images</Form.Label>
                <Form.Control onChange={handleFormData} type="text" placeholder="type URL" name="images" />
            </Form.Group>
            <Button variant="outline-info" type="submit" className="shadow">Add Genre</Button>
        </Form>
    )
}
export default NewGenreForm
