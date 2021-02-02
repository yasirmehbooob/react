import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../logo.svg';
import Login from './../login/login';


const navbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Login</Link>
                    <Link className="nav-link" to="singup">SingUp</Link>
                    </Nav>
                   </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navbar
