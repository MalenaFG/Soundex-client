import { Nav, Navbar, Container, Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">RECOMMENDATOR 3.000</Navbar.Brand>
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
export default Header