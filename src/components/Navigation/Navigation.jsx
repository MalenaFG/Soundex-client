import './Navigation.css'
import { Nav, Navbar, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import SongFilter from "../SongFilter/SongFilter"
import soundex from "../../assets/soundex.svg"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="Navigation bg-body-dark">
            <Container className='position-relative'>

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

                    <Nav className="me-auto" >
                        <Nav.Link to={"/genres"} as={Link} className="mx-md-2">Music genres</Nav.Link>
                        <Nav.Link to={"/songs"} as={Link} className="mx-md-2">Songs</Nav.Link>
                        <Nav.Link to={"/about"} as={Link} className="mx-md-2">About us</Nav.Link>
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