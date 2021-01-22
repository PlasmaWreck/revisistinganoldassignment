import { Container, Col, Jumbotron } from 'react-bootstrap';
import './titlejumbo.css';
const titlejumbo = () => {
    return (
        <Col xs={12} className="mt-5 centerX centerY">
            <Jumbotron fluid className = "">
                <Container>
                    <h1>Card Catagories</h1>
                </Container>
            </Jumbotron>
        </Col>
    )
}

export default titlejumbo;