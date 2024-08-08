import axios from "axios"
import { useEffect, useState } from "react"
import SongListCard from "../SongListCard/SongListCard"
import { Col, Row, ListGroup } from "react-bootstrap"

const API_URL = "http://localhost:5005"

const SongsList = () => {

    const [songsData, setSongsData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSongsData()
    }, [])

    const fetchSongsData = () => {
        axios
            .get(`${API_URL}/songs`)
            .then(({ data }) => {
                setSongsData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Row className="SongsList mb-4">
            {
                isLoading ?
                    <h2>Loading data...</h2>
                    : songsData.map(elm => {
                        return (
                            <Col md={{ span: 6 }} key={elm.id}>
                                <div className="mb-4">
                                    <SongListCard  {...elm} />
                                </div>
                            </Col>

                        )
                    })
            }
        </Row>
    )
}

export default SongsList