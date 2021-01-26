import { Form, Button, Container,Row,Col } from 'react-bootstrap';
import './login.css'

const login = () => {
    return (
            <Container>
                <Row className="center-top">
                    <Col xs lg="2"></Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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
