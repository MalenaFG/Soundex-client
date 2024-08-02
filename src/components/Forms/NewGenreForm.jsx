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

    const generateAndCleanArray = arr => arr.split(",").map(el => el.trim())

    const handleSubmit = event => {

        event.preventDefault()

        formValues.origins = generateAndCleanArray(originsValues.countries)
        formValues.linkedBands = generateAndCleanArray(formValues.linkedBands)
        formValues.childrenGenres = generateAndCleanArray(formValues.childrenGenres)
        formValues.images = generateAndCleanArray(formValues.images)

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
                    <Form.Label>Name:<sup>*</sup></Form.Label>
                    <Form.Control
                        onChange={handleFormValues}
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={formValues.name}
                        required />
                </Form.Group>

                <p className="fw-bold text-uppercase">Origins:</p>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="dateId">
                            <Form.Label>Date:<sup>*</sup></Form.Label>
                            <Form.Control
                                onChange={handleFormValues}
                                type="number"
                                name="date"
                                value={originsValues.date}
                                required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="countryId">
                            <Form.Label>Countries:<sup>*</sup></Form.Label>
                            <Form.Control
                                onChange={handleFormValues}
                                type="text"
                                placeholder="Type countries separated with commas"
                                name="countries"
                                value={originsValues.country}
                                required />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="descriptionId">
                    <Form.Label>Description:<sup>*</sup></Form.Label>
                    <Form.Control
                        as="textarea"
                        onChange={handleFormValues}
                        rows={3}
                        placeholder="Write a description (max 400 characters) "
                        maxLength={400}
                        name="description"
                        value={formValues.description}
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="linkedBandsId">
                    <Form.Label>Linked Bands:<sup>*</sup></Form.Label>
                    <Form.Control
                        onChange={handleFormValues}
                        type="text"
                        placeholder="Type the bands separated with commas"
                        name="linkedBands"
                        value={formValues.linkedBands}
                        required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mainstreamId">
                    <Form.Check
                        onChange={handleFormValues}
                        type="checkbox"
                        label="Is mainstream?:"
                        name="isMainstream"
                        checked={formValues.isMainstream} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="parentGenreId">
                    <Form.Label>Parent genre:</Form.Label>
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
                        placeholder="type URLs separated with commas"
                        name="images"
                        value={formValues.images} />
                </Form.Group>

                <Button variant="outline-info" type="submit" className="shadow">Add Genre</Button>

            </Form>
        </div>
    )
}
export default NewGenreForm
