import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = 'http://localhost:5005'

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