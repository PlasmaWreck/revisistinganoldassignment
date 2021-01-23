import { Col } from 'react-bootstrap';
import './codelogo.css';
import CSSLogo from '../../images/CSSIcon.png'
import JSLogo from '../../images/JSIcon.png'
import HTMLLogo from '../../images/HTMLIcon.png'
import CSHarpLogo from '../../images/CSharpIcon.png'

import './codelogo.css';

const codelogo = (props) => {
    let imgPath;
    switch(props.lang){
        case 'cssDeck':
            imgPath = CSSLogo;
        break;
        case 'jsDeck':
            imgPath = JSLogo;
        break;
        case 'htmlDeck':
            imgPath = HTMLLogo;
        break;
        case 'cSharpDeck':
            imgPath = CSHarpLogo;
        break;
    }
    return (
        <Col xs={6} className="d-flex justify-content-end">
            <img  className="iconSize" src={imgPath}></img>
        </Col>
    )
}

export default codelogo;