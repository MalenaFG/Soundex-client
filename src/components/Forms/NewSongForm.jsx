import { useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"

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
    })

    const [artistData, setArtistData] = useState({
        band: '',
        active: false,
        link: '',
        country: ''
    })

    const handleInputChange = (event => {

        const { value, checked, type, name } = event.target

        console.log(value)
        console.log(name)

        const stateValue = type != 'checkbox' ? value : checked

        Object.keys(songData).includes(name)
            ?
            setSongData({ ...songData, [name]: stateValue })
            :
            setArtistData({ ...artistData, [name]: stateValue })
    })

    //const handleSubmit = (() => { })




    return (
        <div className="NewSongForm">
            <Form >
                <Form.Group className="mb-3" controlId="videoId">
                    <Form.Label>Song:</Form.Label>
                    <Form.Control value={songData.video} type="text" placeholder="Enter YouTube url" onChange={handleInputChange} name="video" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="imageId">
                    <Form.Label>Cover:</Form.Label>
                    <Form.Control value={songData.cover} type="text" placeholder="Enter url" onChange={handleInputChange} name="cover" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="titleId">
                    <Form.Label>Song title:</Form.Label>
                    <Form.Control value={songData.title} type="text" placeholder="Enter song title" onChange={handleInputChange} name="title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="genreId">
                    <Form.Label>Song genre:</Form.Label>
                    <Form.Control value={songData.genreId} type="number" placeholder="Choose genre" onChange={handleInputChange} name="genreId" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Label >Is it a single or part of an album?</Form.Label>

                    <Col>
                        <Form.Check
                            inline
                            label="Single"
                            name="format"
                            value='single'
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
                            value='album'
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
                    <Form.Label>Band or Solo artist:</Form.Label>
                    <Form.Control value={artistData.band} type="text" placeholder="Enter band or solo artist" onChange={handleInputChange} name="band" />
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
                <Button variant="outline-info" type="submit" className="shadow" >
                    Add Song
                </Button>
            </Form>
        </div>
    )
}
export default NewSongForm