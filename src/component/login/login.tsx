import { Form, Button, Container,Row,Col } from 'react-bootstrap';
import axios from 'axios';
import './login.css'

const login = () => {

    const submitLogin = async (event:any) => {
        event.preventDefault();
        let body = {email: event.target.email.value, password: event.target.password.value};
        const responce = await axios.post('http://localhost:8000/api/login', body);
        if(responce.data.token){
            alert(responce.data.token)
        } else {
            alert(responce.data.message)
        }
    }

    return (
            <Container>
                <Row className="center-top">
                    <Col xs lg="2"></Col>
                    <Col>
                        <Form onSubmit = { submitLogin } method="POST">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col xs lg="2"></Col>
                </Row>
            </Container>
    )
}

export default login
