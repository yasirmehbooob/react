import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
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
                    <Nav.Link href="#features">Login</Nav.Link>
                    <Nav.Link href="#pricing">SingUp</Nav.Link>
                    </Nav>
                   </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default navbar
