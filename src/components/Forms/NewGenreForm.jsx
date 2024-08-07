import axios from "axios"
import { useState } from "react"
import { Button, Col, Form, Row, InputGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { generateCleanArray } from "../../utils/genres-utils"

const API_URL = "http://localhost:5005"


const NewGenreForm = () => {

    const [formValues, setFormValues] = useState({
        name: "",
        origins: {},
        description: "",
        linkedBands: "",
        isMainstream: false,
        parentGenre: "",
        childrenGenres: "",
        images: [],
        rate: 0
    })

    const [originsValues, setOriginsValues] = useState({
        date: 0,
        countries: "",
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

    const handleUrlsList = (event, idx) => {
        const { value } = event.target
        const formValuesImagesCopy = [...formValues.images]
        formValuesImagesCopy[idx] = value
        setFormValues({ ...formValues, images: formValuesImagesCopy })
    }

    const addNewUrl = () => {
        setFormValues({ ...formValues, images: [...formValues.images, ''] })
    }

    const handleDeleteImage = (event, idx) => {
        const formValuesImagesCopy = [...formValues.images]
        formValuesImagesCopy.splice(idx, 1)
        setFormValues({ ...formValues, images: formValuesImagesCopy })
    }

    const handleSubmit = event => {

        event.preventDefault()
        formValues.origins.countries = generateCleanArray(originsValues.countries)
        formValues.origins.date = originsValues.date
        formValues.linkedBands = generateCleanArray(formValues.linkedBands)
        formValues.childrenGenres = !formValues.childrenGenres ? generateCleanArray(formValues.childrenGenres) : []

        const requestBody = formValues

        axios
            .post(`${API_URL}/genres/`, requestBody)
            .then(() => navigate('/genres'))
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
                    {
                        formValues.images.map((image, idx) => {
                            return (
                                <InputGroup key={`urls-${idx}`} className="mb-3" >
                                    <Form.Control
                                        onChange={event => handleUrlsList(event, idx)}
                                        type="text"
                                        placeholder="type image URL"
                                        name="images"
                                        value={formValues.images[idx]}
                                        aria-describedby="Image url" />
                                    <Button onClick={event => handleDeleteImage(event, idx)} variant="outline-danger" id="delete-image-btn">
                                        Delete url
                                    </Button>
                                </InputGroup>
                            )
                        })
                    }
                    <div className="d-flex justify-content-center">
                        <Button onClick={addNewUrl} variant="light" size="sm">Add image</Button>
                    </div>
                </Form.Group>

                <Button variant="outline-info" type="submit" className="shadow">Add Genre</Button>

            </Form>
        </div>
    )
}
export default NewGenreForm
