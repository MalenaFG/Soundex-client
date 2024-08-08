import axios from "axios"
import { useState } from "react"
import { Col, Form, Image, ListGroup, Ratio, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./SoundexFilter.css"

const API_URL = 'http://localhost:5005'

const SoundexFilter = () => {

    const [searchResults, setSearchResults] = useState([])


    const filteredData = query => {

        const promises = [
            axios.get(`${API_URL}/songs?title_like=${query}`),
            axios.get(`${API_URL}/genres?name_like=${query}`)
        ]

        query && (

            Promise
                .all(promises)
                .then(([songsByTitle, genresByName]) => {
                    const fullResults = [...songsByTitle.data, ...genresByName.data]
                    setSearchResults(fullResults)
                })
                .catch(err => console.log(err))
        )
    }

    const handleFilter = e => {
        const { value } = e.target
        value === "" ? setSearchResults([]) : filteredData(value)
    }

    const handleFilterValue = e => {
        const { value } = e.target
        setSearchResults([])
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
                    searchResults.map((eachSearch, idx) => {
                        return (
                            <Link to={`/songs/${eachSearch.id}`} onClick={handleFilterValue} key={`${idx}-${eachSearch.id}`}>
                                <ListGroup.Item>
                                    <Row>
                                        <Col xs={{ span: 4 }} >
                                            {
                                                eachSearch.cover
                                                    ?
                                                    <Ratio aspectRatio={"1x1"} >
                                                        <div className="search-thumbnail">
                                                            <Image src={eachSearch.cover} alt={eachSearch.title} style={{ maxHeight: "100%" }} rounded />
                                                        </div>
                                                    </Ratio>
                                                    :
                                                    <Ratio aspectRatio={"1x1"} className="object-fit-cover">
                                                        <div className="search-thumbnail">
                                                            <Image src={eachSearch.images[0]} alt={eachSearch.name} style={{ maxHeight: "100%" }} rounded />
                                                        </div>
                                                    </Ratio>
                                            }
                                        </Col>
                                        <Col>
                                            {eachSearch.title
                                                ?
                                                eachSearch.title
                                                :
                                                eachSearch.name
                                            }
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

export default SoundexFilter




