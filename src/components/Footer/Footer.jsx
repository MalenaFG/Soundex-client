import { Col, Container, Nav, Navbar, NavItem, NavLink, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
    return (

        <footer className="Footer py-3 my-4 border-top ">
            <Container>
                <Row className="justify-content-between">
                    <Col className="col-md-4">
                        <p>© {new Date().getFullYear()}</p>
                    </Col>
                    <Col className="col-md-6 justify-content-end">
                        <Navbar className="justify-content-end bg-body-dark">
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/genres">Genres list</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/songs">Songs list</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to="/about">About us</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer