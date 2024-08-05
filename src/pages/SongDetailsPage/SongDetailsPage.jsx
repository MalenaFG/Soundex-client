import { Container } from "react-bootstrap"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

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

    const { title, songBy, cover } = isLoading || songDetails
    const { band, active, link, country } = isLoading || songBy

    return (
        <section className="SongDetailsPage">
            <Container>
                {isLoading
                    ?
                    <h1>Loading Details...</h1>
                    :
                    <article>
                        <h1>{title} - {band}</h1>
                        <img src={cover} alt={title} />
                    </article>
                }
            </Container>
        </section>
    )
}
export default SongDetailsPage