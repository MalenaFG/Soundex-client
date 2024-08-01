import { Col, Nav, NavItem, NavLink, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Footer = () => {
    return (

        <footer className="Footer py-3 my-4 border-top ">
            <Row className="justify-content-between">
                <Col className="col-md-4">
                    <p>© {new Date().getFullYear()}</p>
                </Col>
                <Col className="col-md-6 justify-content-end">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Link to="/" className="nav-link">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/genres" className="nav-link">Genres list</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/songs" className="nav-link">Songs list</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/about" className="nav-link">About us</Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </footer>
    )
}
export default Footer