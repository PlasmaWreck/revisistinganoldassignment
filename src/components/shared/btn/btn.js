import {Col,Nav} from 'react-bootstrap';
import './btn.css';
const btn = (props) => {
    const handleChange = props.onClick ? () => props.onClick(): () => {} ;
    return (
        <Col onClick={handleChange} xs={props.colSize} className={props.btnStyle}>
            <Nav.Link as={props.as} to={props.to}>{props.text}</Nav.Link>
        </Col>
    )
}

export default btn;