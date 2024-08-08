import heartFill from '../../assets/heart-fill.svg'
import heart from '../../assets/heart.svg'
import axios from "axios"
import { useEffect, useState, } from "react"
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import CustomImagesCarousel from "../../components/CustomImagesCarousel/CustomImagesCarousel"
import GenreDetailsSidebar from "../../components/GenreDetailsSidebar/GenreDetailsSidebar"
import PlaylistPlayer from "../../components/PlaylistPlayer/PlaylistPlayer"

const API_URL = "http://localhost:5005"

const GenreDetailsPage = () => {

    const { genreId } = useParams()
    const [genreData, setGenreData] = useState()
    const [songsData, setSongsData] = useState([])
    const [like, setLike] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchGenreData()
    }, [])

    useEffect(() => {
        genreData && putGenreData()
    }, [like])

    const fetchGenreData = () => {
        axios
            .get(`${API_URL}/genres/${genreId}?_embed=songs`)
            .then(({ data }) => {
                const onlyGenreData = { ...data }
                delete onlyGenreData.songs
                setGenreData(onlyGenreData)
                setLike(onlyGenreData.like)
                data.songs.length > 0 && setSongsData(data.songs)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const putGenreData = () => {

        genreData.like = like
        setGenreData(genreData)
        const requestBody = { ...genreData }
        axios
            .put(`${API_URL}/genres/${genreId}`, requestBody)
            .then()
            .catch(err => console.log(err))

    }

    const handleLikes = () => {
        setLike(!like)
        putGenreData()
    }
    const {
        name,
        description,
        images,
        isMainstream
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

                                    <Button as={Link} to="/genres" variant="outline-info" className="shadow" size="lg">Back to Genres list</Button>
                                    <Button as={Link} to={`/genres/edit/${genreId}`} variant="info" className="shadow" size="lg">Edit Genre</Button>

                                </div>

                                <hr />

                            </div>
                            <div className="info">
                                <Row>
                                    <Col md={{ span: 7 }}>
                                        <div className="d-flex justify-content-between align-items-between flex-wrap">
                                            <h1>
                                                {name}
                                                <sup>
                                                    {
                                                        isMainstream && <Badge pill bg='warning' text="dark" className="ms-3 fs-6">Mainstream</Badge>
                                                    }
                                                </sup>
                                            </h1>

                                            <Image onClick={handleLikes} src={like ? heartFill : heart} width={25} className='heart-like-icon' />

                                        </div>
                                        <hr />
                                        <p>{description}</p>

                                        <CustomImagesCarousel imagesArray={images} />

                                        <hr />

                                        <GenreDetailsSidebar {...genreData} />


                                    </Col>
                                    <Col md={{ span: 5 }}>

                                        {
                                            songsData.length > 0 ? <PlaylistPlayer songsData={songsData} isLoading={isLoading} /> : <h1>NP SONGS</h1>
                                        }

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