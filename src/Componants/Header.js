import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <Navbar expand="lg" className="bg-primary-tertiary text-white">
            <Container>
                <Navbar.Brand>
                    <Link to="/" style={{ textDecoration: "none", color: "white" }}>Stop Watch </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home </Link></Nav.Link>
                        <Nav.Link><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;