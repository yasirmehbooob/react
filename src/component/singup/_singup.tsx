import { Form, Button, Container,Row,Col } from 'react-bootstrap';
import './singup.css';

const singup = () => {
    return (
        <Container className="center-top">
             <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Password" />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="+923xxxxxxxxx" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDesignation">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option value="">Choose...</option>
                        <option value="developer">Developer</option>
                    </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridResume">
                    <Form.Label>Resume</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProfilePhoto">
                    <Form.Label>Profile Image</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
        </Container>
    )
}

export default singup
