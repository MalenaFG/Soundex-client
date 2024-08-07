import './StarsRating.css'
import starEmpty from '../../assets/star-empty.svg'
import starFull from '../../assets/star-full.svg'

const StarsRating = ({ stars, setStars }) => {

    const handleStarChange = (value) => {
        setStars(value)
    }

    return (
        <div className='StarsRating'>

            <div className='d-flex ' style={{ position: 'absolute' }}>
                <img src={starEmpty} className='starEmpty1' onClick={() => setStars && handleStarChange(1)} />
                <img src={starEmpty} className='starEmpty2' onClick={() => setStars && handleStarChange(2)} />
                <img src={starEmpty} className='starEmpty3' onClick={() => setStars && handleStarChange(3)} />
                <img src={starEmpty} className='starEmpty4' onClick={() => setStars && handleStarChange(4)} />
                <img src={starEmpty} className='starEmpty5' onClick={() => setStars && handleStarChange(5)} />
            </div>

            <div className='d-flex'>
                {
                    Array.from(Array(stars)).map((elm, idx) => {
                        return (
                            <img key={`star-${idx}`} src={starFull} className='starFull1' />
                        )
                    })
                }

            </div>

        </div>

    )
}

export default StarsRating