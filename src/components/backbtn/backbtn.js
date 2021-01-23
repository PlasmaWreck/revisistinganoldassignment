import pageHandler from '../../pages/pageHandler';
import { useHistory } from 'react-router-dom';
import {Col} from 'react-bootstrap';
import BackArrowImage from '../../images/Arrows-Back-icon.png';
import './backbtn.css';

const BackBtn = () => {
    const history = useHistory();
    const handleClick = () => history.push('/title');
    return (
        <>
            <Col xs={3} onClick={handleClick} className="centerY mt-5 backText">
                <img className="backButton" src={BackArrowImage}></img>
                <p className="ml-n1 mr-5 mb-auto mt-auto">Back To Catagories</p>
            </Col>
            <Col xs={9}>
            </Col>
        </>
    )
}

export default BackBtn;