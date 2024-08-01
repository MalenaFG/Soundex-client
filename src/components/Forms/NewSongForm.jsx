import { Button, Form } from "react-bootstrap"

const NewSongForm = () => {


    return (
        <Form className="NewSongForm">
            <Form.Group className="mb-3" controlId="videoId">
                <Form.Label>Song:</Form.Label>
                <Form.Control type="text" placeholder="Enter YouTube url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageId">
                <Form.Label>Cover:</Form.Label>
                <Form.Control type="text" placeholder="Enter url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="titleId">
                <Form.Label>Song title:</Form.Label>
                <Form.Control type="text" placeholder="Enter song title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="genreId">
                <Form.Label>Song genre:</Form.Label>
                <Form.Control type="text" placeholder="Choose genre" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="singleAlbumId">
                <Form.Check
                    inline
                    label="Is it a single?"
                    name="single"
                    type={"radio"}
                    id={"singleId"}
                /> <Form.Check
                    inline
                    label="Is it part of an album?"
                    name="album"
                    type={"radio"}
                    id={"albumId"}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bandId">
                <Form.Label>Band or Solo artist:</Form.Label>
                <Form.Control type="text" placeholder="Enter band or solo artist" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="activeBandId">
                <Form.Check
                    inline
                    label="Is this band or solo artist active nowadays?"
                    name="active"
                    type={"radio"}
                    id={"activeId"}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="bandWebId">
                <Form.Label>Band or Solo artist website:</Form.Label>
                <Form.Control type="text" placeholder="Enter website" />
            </Form.Group>
            <Button variant="outline-info" type="submit" className="shadow">
                Add Song
            </Button>
        </Form>
    )
}
export default NewSongForm