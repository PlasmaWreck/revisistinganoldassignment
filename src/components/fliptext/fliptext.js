import { Col } from 'react-bootstrap';
import './fliptext.css';
const FlipText = (props) => {
    return (
        <Col xs={6} className="d-flex justify-content-start align-items-end">
            <p className="">{"Click the card to switch to the " + (props.isDef ? "Vocabulary." : "Definition.")}</p>
        </Col>
    )
}
export { FlipText };