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
            .then(({ data }) => {
                setSongsData(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <ul className="SongsList justify-content-center">
            {
                isLoading ?
                    <h2>Loading data...</h2>
                    : songsData.map(elm => {
                        return (

                            <SongListCard key={elm.id} {...elm} />

                        )
                    })
            }
        </ul>
    )
}

export default SongsList