import {Col,Nav} from 'react-bootstrap';
import './btn.css';
const btn = (props) => {
    return (
        <Col xs={props.colSize} className={props.btnStyle}>
            <Nav.Link as={props.as} to={props.to}>{props.text}</Nav.Link>
        </Col>
    )
}

export default btn;