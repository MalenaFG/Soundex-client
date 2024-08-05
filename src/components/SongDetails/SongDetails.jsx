import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_URL = 'http://localhost:5005'

const SongDetails = () => {

    const [songDetails, setSongDetails] = useState({})
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

    const { title, songBy, cover } = songDetails
    return (
        <article className="SongDetails">
            {isLoading
                ?
                <h1>Loading details...</h1>
                :
                <article>
                    <h1>{title} - {songBy.band}</h1>
                    <img src={cover} alt={title} />
                </article>
            }

        </article>
    )
}

export default SongDetails