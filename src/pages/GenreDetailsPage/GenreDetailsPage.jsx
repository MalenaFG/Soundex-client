import axios from "axios"
import { useEffect, useState, } from "react"
import { Badge, Button, Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CustomImagesCarousel from "../../components/CustomImagesCarousel/CustomImagesCarousel"
import GenreDetailsSidebar from "../../components/GenreDetailsSidebar/GenreDetailsSidebar"

const API_URL = "http://localhost:5005"

const GenreDetailsPage = () => {

    const { genreId } = useParams()
    const [genreData, setGenreData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const fetchGenreData = () => {
        axios
            .get(`${API_URL}/genres/${genreId}`)
            .then(({ data }) => {
                setGenreData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchGenreData()
    }, [])

    const {
        name,
        description,
        images,
        isMainstream,
        rate
    } = isLoading || genreData

    return (
        <section className="GenreDetailsPage">
            <Container>
                {
                    isLoading
                        ?
                        <h1>Loading Genre data...</h1>
                        :
                        <>
                            <div className="header">

                                <div className="d-flex justify-content-between">

                                    <Link to="/genres">
                                        <Button variant="outline-info" className="shadow" size="lg">Back to Genres list</Button>
                                    </Link>

                                    <Link to={'/songs/new'} >
                                        <Button variant="info" className="shadow" size="lg">Add new Song</Button>
                                    </Link>

                                </div>

                                <hr />

                                <CustomImagesCarousel imagesArray={images} />

                                <hr />

                            </div>
                            <div className="info">
                                <Row>
                                    <Col md={{ span: 5 }}>

                                        <GenreDetailsSidebar {...genreData} />

                                    </Col>
                                    <Col md={{ span: 7 }}>
                                        <div className="d-flex justify-content-between align-items-between flex-wrap">
                                            <h1>
                                                {name}
                                                <sup>
                                                    {
                                                        isMainstream
                                                            ?
                                                            <Badge pill bg='warning' text="dark" className="ms-3 fs-6">Mainstream</Badge>
                                                            : ''
                                                    }
                                                </sup>
                                            </h1>
                                            <Badge pill className="d-flex align-items-center fs-5">
                                                Rate: {rate}
                                            </Badge>
                                        </div>
                                        <hr />
                                        <p>{description}</p>
                                    </Col>
                                </Row>



                            </div>
                        </>

                }
            </Container>
        </section >
    )
}
export default GenreDetailsPage