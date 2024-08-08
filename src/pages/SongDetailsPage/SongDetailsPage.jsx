import { Badge, Button, Card, Col, Container, Image, Ratio, Row } from "react-bootstrap"
import axios from "axios"
import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import StarsRating from "../../components/StarsRating/StarsRating"

const API_URL = 'http://localhost:5005'

const SongDetailsPage = () => {
    const [songDetails, setSongDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [stars, setStars] = useState(0)

    const { songId } = useParams()

    useEffect(() => {
        fetchSongData()
    }, [songId])

    useEffect(() => {
        updateRating()
    }, [stars])

    const fetchSongData = () => {
        axios
            .get(`${API_URL}/songs/${songId}`)
            .then(({ data }) => {
                setSongDetails(data)
                setIsLoading(false)
                setStars(data.rate)
            })
    }

    const updateRating = () => {
        stars != 0
            &&
            (axios
                .put(`${API_URL}/songs/${songId}`, { ...songDetails, rate: stars })
                .then(() => fetchSongData())
                .catch(err => console.log(err))
            )
    }

    const { title, songBy, cover, format, albumTitle, video } = isLoading || songDetails
    const { band, active, link, country } = isLoading || songBy

    return (
        <section className="SongDetailsPage">
            <Container>
                {isLoading
                    ?
                    <h1>Loading Details...</h1>
                    :
                    <>
                        <div className="header d-flex justify-content-between">
                            <Button as={Link} to={"/songs"} variant="outline-light" className="shadow" >Back to Songs list</Button>
                            <Button as={Link} to={`/songs/edit/${songId}`} variant="light" className="shadow"  >Edit Song</Button>
                        </div>

                        <hr />

                        <div className="info">
                            <Row className="justify-space-between">
                                <Col md={{ span: 6, order: 0 }} xs={{ order: 1 }} className="d-flex flex-column align-items-center">
                                    <Card body>
                                        <Row>
                                            <Col md={{ span: 9 }}>
                                                <h1>
                                                    {title}
                                                </h1>
                                            </Col>
                                            <Col md={{ span: 3 }}>
                                                <sup>
                                                    {<StarsRating stars={stars} setStars={setStars} id={songId} />}
                                                </sup>
                                            </Col>

                                            <hr />

                                            <Col md={{ span: 6 }}>
                                                <Ratio aspectRatio="1x1" style={{ width: "200px" }}>
                                                    <Image src={cover} alt={title} style={{ objectFit: "cover" }} rounded />
                                                </Ratio>
                                            </Col>
                                            <Col md={{ span: 6 }} className="d-flex flex-column justify-content-between">
                                                <h3 className="mb-3" >
                                                    Song by: <br /> {band}
                                                </h3>
                                                <a href={link} target="_blank" className="mb-3"><small>(www.oasis.com)</small></a>
                                                <h5 className="mb-3">
                                                    {
                                                        active && <Badge pill bg='yellow' text="dark" className="fs-6">Still Active</Badge>
                                                    }
                                                </h5>
                                                {
                                                    format === "album"
                                                        ?
                                                        <p>{format}: {albumTitle}</p>
                                                        :
                                                        <p>{format}</p>
                                                }

                                                <p >{country}</p>
                                            </Col>
                                        </Row>
                                    </Card>

                                </Col>
                                <Col md={{ span: 6, order: 1 }} xs={{ order: 0 }} >
                                    <Ratio aspectRatio="16x9">
                                        <ReactPlayer url={video}
                                            width='100%'
                                            height='100%' />
                                    </Ratio>
                                </Col>
                            </Row>

                        </div>
                    </>
                }
            </Container>
        </section>
    )
}
export default SongDetailsPage