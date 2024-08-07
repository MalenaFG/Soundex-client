import axios from "axios"
import { useEffect, useState } from "react"
import SongListCard from "../SongListCard/SongListCard"
import { ListGroup } from "react-bootstrap"

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
        <ListGroup className="SongsList mb-4">
            {
                isLoading ?
                    <h2>Loading data...</h2>
                    : songsData.map(elm => {
                        return (

                            <SongListCard key={elm.id} {...elm} />

                        )
                    })
            }
        </ListGroup>
    )
}

export default SongsList