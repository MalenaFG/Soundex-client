import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = import.meta.env.VITE_API_URL

const SongsCounter = () => {

    const [songsCounter, setSongsCounter] = useState([])

    useEffect(() => {
        fetchSongsData()
    }, [])

    const fetchSongsData = () => {
        axios
            .get(`${API_URL}/songs`)
            .then(({ data }) => setSongsCounter(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="SongsCounter">
            {songsCounter.length}
        </div>
    )
}

export default SongsCounter