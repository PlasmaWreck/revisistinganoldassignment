import React from 'react';
import Btn from '../components/btn/btn';
import FlashCard from '../components/flashcard/flashcard';
import { FlipText } from '../components/fliptext/fliptext';
import { Container, Row } from 'react-bootstrap';
import { Component } from 'react';


class flashPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false || props.loaded,
            deckLang: props.lang,
            flashCardDecks: props.cardDecks,
            isDef: false,
        }
        console.log(props);
        this.ChangeDef = this.ChangeDef.bind(this);
    }
    ChangeDef = () => {
        this.setState({ isDef: !this.state.isDef });
        console.log(this.state);
    }
    render() {
        if (!this.state.loaded) {
            return (
                <Btn />
            )
        } else {
            return (
                <Container>
                    <Row className='mx-5'>
                        <FlipText isDef={this.state.isDef} />
                        <FlashCard onClick={this.ChangeDef} isDef={this.state.isDef} text={this.state.flashCardDecks[this.state.deckLang].cardVocab[0]} />
                        <Btn text='Previous' btnStyle='flashButton' />
                        <Btn text='Random' btnStyle='mx-1 flashButton' />
                        <Btn text='Next' btnStyle='flashButton' />
                    </Row>
                </Container >
            )
        }
    }
}


export default flashPage;
