import { Col } from 'react-bootstrap';
import './flashcard.css';
const flashcard = (props) => {
    const handleChange = () => props.onClick();
    return (
        <Col xs={12} onClick={handleChange} className="centerX centerY flashCardBody">
            <p className="">{props.isDef ? '' : props.text}</p>
        </Col>
    )
}

export default flashcard;