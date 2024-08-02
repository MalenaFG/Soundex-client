import { useEffect, useState } from "react"
import axios from "axios"
import GenreListCard from "../GenreListCard/GenreListCard"
import { Row } from "react-bootstrap"
const API_URL = "http://localhost:5005"

const GenresList = () => {
    const [genresData, setGenresData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetchGenresData()
    }, [])

    const fetchGenresData = () => {
        axios
            .get(`${API_URL}/genres`).then(response => {
                setGenresData(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }
    return (
        <Row className="GenresList">
            {
                isLoading
                    ?
                    <h2>Loading data...</h2>
                    :
                    genresData.map(genre => {
                        return (
                            <Col md={4} >
                                <GenreListCard key={genre.id} {...genre} />
                            </Col>
                        )
                    })
            }

        </Row>

    )
}
export default GenresList