import { Nav, Navbar, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import SongFilter from "../SongFilter/SongFilter"
import soundex from "../../assets/soundex.svg"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src={soundex}
                        width="30"
                        height="30"
                        className="d-inline-block align-middle me-3"
                        alt="Soundex" />
                    Soundex
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={"/"} as={Link}>Home</Nav.Link>
                        <Nav.Link to={"/genres"} as={Link}>Genres list</Nav.Link>
                        <Nav.Link to={"/songs"} as={Link} >Songs list</Nav.Link>
                        <Nav.Link to={"/about"} as={Link} >About us</Nav.Link>
                    </Nav>
                    <Nav>
                        <SongFilter />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation