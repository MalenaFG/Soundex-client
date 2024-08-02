import { Nav, Navbar, Container, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="Navbar bg-body-tertiary">
            <Container>
                <Link to="/" className="navbar-brand">
                    RECOMMENDATOR 3.000
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={"/"} className="nav-link">Home</Link>
                        <Link to={"/genres"} className="nav-link">Genres list</Link>
                        <Link to={"/songs"} className="nav-link">Songs list</Link>
                        <Link to={"/about"} className="nav-link">About us</Link>
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