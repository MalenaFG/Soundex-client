import { Link } from 'react-router-dom'
import './GenreListCard.css'
import { Button, Card, Col, Ratio } from "react-bootstrap"

const GenreListCard = ({ name, origins, images, id }) => {

    return (

        <Card className="GenreListCard mb-3">
            <Ratio aspectRatio="16x9">
                <Card.Img variant="top" src={images[0]} />
            </Ratio>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{origins.date}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-center'>
                <Link to={`/genres/${id}`} className='w-100'>
                    <Button variant='outline-info' className='w-100'>Go to Genre</Button>
                </Link>
            </Card.Footer>
        </Card>

    )
}

export default GenreListCard