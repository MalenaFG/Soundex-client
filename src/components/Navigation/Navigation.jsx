import { Nav, Navbar, Container, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import boombox from "../../assets/boombox.svg"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src={boombox}
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
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation