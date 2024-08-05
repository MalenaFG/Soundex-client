import { Badge, Button, Card, Col, Container, Image, Ratio, Row } from "react-bootstrap"
import axios from "axios"
import ReactPlayer from 'react-player/youtube'
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import starEmpty from '../../assets/star-empty.png'
import starFull from '../../assets/star-full.png'
const API_URL = 'http://localhost:5005'

const SongDetailsPage = () => {
    const [songDetails, setSongDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const { songId } = useParams()

    useEffect(() => {
        fetchSongData()
    }, [])

    const fetchSongData = () => {
        axios
            .get(`${API_URL}/songs/${songId}`)
            .then(({ data }) => {
                setSongDetails(data)
                setIsLoading(false)
            }

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
                            <Button as={Link} to={"/songs"} variant="outline-info" className="shadow" size="lg">Back to Songs list</Button>
                            <Button as={Link} to={`/songs/edit/${songId}`} variant="info" className="shadow" size="lg" >Edit Song</Button>
                        </div>

                        <hr />

                        <div className="info">
                            <Row className="justify-space-between">
                                <Col md={{ span: 6, order: 0 }} xs={{ order: 1 }} className="d-flex flex-column align-items-center">
                                    <Card body>
                                        <Row>
                                            <h1>{title}</h1>
                                            <hr />
                                            <Col md={{ span: 6 }}>
                                                <Ratio aspectRatio="1x1" style={{ width: "200px" }}>
                                                    <Image src={cover} alt={title} style={{ objectFit: "cover" }} />
                                                </Ratio>
                                            </Col>
                                            <Col md={{ span: 6 }} className="d-flex flex-column justify-content-between">
                                                <h3 className="mb-3" >
                                                    Song by: <Link to={link}>{band}</Link></h3>
                                                <h5 className="mb-3">
                                                    {
                                                        active && <Badge pill bg='warning' text="dark" className="ms-3 fs-6">Still Active</Badge>
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