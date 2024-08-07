import axios from "axios"
import { useState } from "react"
import { Col, Form, ListGroup, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const API_URL = 'http://localhost:5005'

const SongFilter = () => {

    const handleFilter = e => {
        const { value } = e.target
        filteredData(value)
    }

    const [songResults, setSongResults] = useState([])

    const filteredData = query => {

        query && (

            axios
                .get(`${API_URL}/songs?title_like=${query}`)
                .then(({ data }) => setSongResults(data))
                .catch(err => console.log(err))
        )
    }

    const handleFilterValue = e => {
        setSongResults([])
        value = ""
    }

    return (
        <div className="SongsFilter position-relative">

            <Form className="d-flex">
                <Form.Control
                    onKeyUp={handleFilter}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
            </Form>

            <ListGroup style={{ position: 'absolute', zIndex: '99', width: '100%' }}>


                {
                    songResults.map(eachSong => {
                        return (
                            <Link to={`/songs/${eachSong.id}`} onClick={handleFilterValue} key={eachSong.id}>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={{ span: 4 }}>
                                            <img src={eachSong.cover} alt={eachSong.title} style={{ maxWidth: "100%" }} />
                                        </Col>
                                        <Col>
                                            {eachSong.title}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </Link>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default SongFilter




