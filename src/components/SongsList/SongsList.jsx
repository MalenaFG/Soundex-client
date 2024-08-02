import axios from "axios"
import { useEffect, useState } from "react"
import SongListCard from "../SongListCard/SongListCard"
import { Link } from "react-router-dom"

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
            .then((res) => {
                setSongsData(res.data)
                setIsLoading(false)
            })
            .catch(err => consele.log(err))
    }

    return (
        <ul className="SongsList justify-content-center">
            {
                isLoading ?
                    <h2>Loading data...</h2>
                    : songsData.map(elm => {
                        return (
                            <Link to={`/songs/${elm.id}`} key={elm.id}>
                                <SongListCard {...elm} />
                            </Link>
                        )
                    })
            }
        </ul>
    )
}

export default SongsList