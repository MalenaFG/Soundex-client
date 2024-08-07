import axios from "axios"
import { useEffect, useState } from "react"

const API_URL = 'http://localhost:5005'

const GenresCounter = () => {

    const [genresCounter, setGenresCounter] = useState([])

    useEffect(() => {
        fetchGenresData()
    }, [])

    const fetchGenresData = () => {
        axios
            .get(`${API_URL}/genres`)
            .then(({ data }) => setGenresCounter(data))
            .catch(err => console.log(err))
    }


    return (
        <div className="GenresCounter">
            {genresCounter.length}
        </div>
    )
}

export default GenresCounter