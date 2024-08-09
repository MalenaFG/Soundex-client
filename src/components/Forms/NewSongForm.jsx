import axios from "axios"
import { useEffect, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

const NewSongForm = () => {

    const [songData, setSongData] = useState({
        id: 0,
        genreId: 0,
        title: '',
        songBy: {},
        format: '',
        albumTitle: '',
        cover: '',
        video: '',
        rate: 0
    })

    const [artistData, setArtistData] = useState({
        band: '',
        active: false,
        link: '',
        country: ''
    })

    const [genresArr, setGenresArr] = useState([])

    const [isLoaded, setIsLoaded] = useState(true)

    const navigate = useNavigate()

    const { genreRelatedId } = useParams()

    const handleInputChange = (event => {
        const { value, checked, type, name } = event.target
        const stateValue = type != 'checkbox' ? value : checked
        Object.keys(songData).includes(name)
            ?
            setSongData({ ...songData, [name]: stateValue })
            :
            setArtistData({ ...artistData, [name]: stateValue })
    })

    const handleSubmit = e => {
        e.preventDefault()
        songData.songBy = artistData
        songData.genreId = Number(songData.genreId)
        const requestBody = songData

        axios
            .post(`${API_URL}/songs`, requestBody)
            .then(() => navigate('/songs'))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllGenres()
        genreRelatedId && setSongData({ ...songData, ["genreId"]: Number(genreRelatedId) })
    }, [])

    const getAllGenres = () => {
        axios
            .get(`${API_URL}/genres`)
            .then(({ data }) => {
                const genresArr = data.map(elm => {
                    return ({ id: elm.id, name: elm.name })
                })
                setGenresArr(genresArr)
                setIsLoaded(false)
            })
            .catch(err => console.log(err))
    }



    return (
        <div className="NewSongForm">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="videoId">
                    <Form.Label>Song:<sup>*</sup></Form.Label>
                    <Form.Control value={songData.video} type="text" placeholder="Enter YouTube url" onChange={handleInputChange} name="video" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imageId">
                    <Form.Label>Cover:<sup>*</sup></Form.Label>
                    <Form.Control value={songData.cover} type="text" placeholder="Enter url" onChange={handleInputChange} name="cover" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="titleId">
                    <Form.Label>Song title:<sup>*</sup></Form.Label>
                    <Form.Control value={songData.title} type="text" placeholder="Enter song title" onChange={handleInputChange} name="title" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="genreId">
                    <Form.Label>Song genre:<sup>*</sup></Form.Label>
                    <Form.Select aria-label="Default select example" value={songData.genreId} type="number" onChange={handleInputChange} name="genreId" required>

                        {
                            isLoaded
                                ?
                                <option>Loading...</option>
                                :
                                <>
                                    <option>Select genre</option>
                                    {
                                        genresArr.map(elm => {
                                            return <option key={elm.id} value={`${elm.id}`} >{elm.name}</option>
                                        })
                                    }
                                </>
                        }

                    </Form.Select>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Label >Is it a single or part of an album?</Form.Label>

                    <Col>
                        <Form.Check
                            inline
                            label="Single"
                            name="format"
                            value='Single'
                            type="radio"
                            id={"inline-radio-1"}
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col>
                        <Form.Check
                            inline
                            label="Album"
                            name="format"
                            value='Album'
                            type="radio"
                            id={"inline-radio-2"}
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="albumId">
                    <Form.Label>Album title:</Form.Label>
                    <Form.Control value={songData.albumTitle} type="text" placeholder="Enter album title" onChange={handleInputChange} name="albumTitle" />
                </Form.Group>

                <hr />

                <Form.Group className="mb-3" controlId="bandId">
                    <Form.Label>Band or Solo artist:<sup>*</sup></Form.Label>
                    <Form.Control value={artistData.band} type="text" placeholder="Enter band or solo artist" onChange={handleInputChange} name="band" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bandNationalityId">
                    <Form.Label>Nationality:</Form.Label>
                    <Form.Control value={artistData.country} type="text" placeholder="Enter band or solo artist nationality" onChange={handleInputChange} name="country" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="activeBandId">
                    <Form.Check
                        inline
                        checked={artistData.active}
                        label="Is this band or solo artist active nowadays?"
                        name="active"
                        type="checkbox"
                        id={"activeId"}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bandWebId">
                    <Form.Label>Band or Solo artist website:</Form.Label>
                    <Form.Control value={artistData.link} type="text" placeholder="Enter website" onChange={handleInputChange} name="link" />
                </Form.Group>
                <hr />
                <Button variant="outline-light" type="submit" >
                    Add Song
                </Button>
            </Form>
        </div>
    )
}
export default NewSongForm