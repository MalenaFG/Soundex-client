import axios from "axios"
import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
const API_URL = "http://localhost:5005"


const NewGenreForm = () => {
    const [formValues, setFormValues] = useState({
        name: "",
        origins: {},
        description: "",
        linkedBands: "",
        isMainstream: false,
        parentGenre: "",
        childrenGenres: [],
        images: []
    })

    const [originsValues, setOriginsValues] = useState({
        date: 0,
        countries: [],
    })

    const navigate = useNavigate()

    const handleFormValues = event => {
        const { value, checked, name } = event.target
        Object.keys(originsValues).includes(name)
            ?
            setOriginsValues({
                ...originsValues,
                [name]: value
            })
            :
            setFormValues({
                ...formValues,
                [name]: !checked ? value : checked
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const countriesArray = originsValues.countries.split(",")

        countriesArray.forEach(el => el.trim())
        originsValues.countries = countriesArray
        formValues.origins = originsValues

        const requestBody = formValues
        axios
            .post(`${API_URL}/genres/`, requestBody)
            .then(res => navigate('/genres'))
            .catch(err => console.log(err))
    }

    return (
        <div className="NewGenreForm" >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nameId">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        onChange={handleFormValues}
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={formValues.name} />
                </Form.Group>
                <p className="fw-bold text-uppercase">Origins:</p>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="dateId">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control
                                onChange={handleFormValues}
                                type="number"
                                name="date"
                                value={originsValues.date} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="countryId">
                            <Form.Label>Countries:</Form.Label>
                            <Form.Control
                                onChange={handleFormValues}
                                type="text"
                                placeholder="Type countries separated with commas"
                                name="countries"
                                value={originsValues.country} />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="descriptionId">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        onChange={handleFormValues}
                        rows={3}
                        placeholder="Write a description (max 400 characters) "
                        maxLength={400}
                        name="description"
                        value={formValues.description} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="linkedBandsId">
                    <Form.Label>Linked Bands</Form.Label>
                    <Form.Control
                        onChange={handleFormValues}
                        type="text"
                        placeholder="Type the bands separated with commas"
                        name="linkedBands"
                        value={formValues.linkedBands} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mainstreamId">
                    <Form.Check
                        onChange={handleFormValues}
                        type="checkbox"
                        label="Is mainstream?"
                        name="isMainstream"
                        checked={formValues.isMainstream} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="parentGenreId">
                    <Form.Label>Parent genre</Form.Label>
                    <Form.Control
                        onChange={handleFormValues}
                        type="text"
                        placeholder="Enter the parent Genre if exists"
                        name="parentGenre"
                        value={formValues.parentGenre} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="childrenGenresId">
                    <Form.Label>Children genres</Form.Label>
                    <Form.Control
                        onChange={handleFormValues}
                        type="text"
                        placeholder="Type the genres separated with commas"
                        name="childrenGenres"
                        value={formValues.childrenGenres} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Images</Form.Label>
                    <Form.Control
                        onChange={handleFormValues}
                        type="text"
                        placeholder="type URL"
                        name="images"
                        value={formValues.images} />
                </Form.Group>
                <Button variant="outline-info" type="submit" className="shadow">Add Genre</Button>
            </Form>
        </div>
    )
}
export default NewGenreForm
