import React from 'react';
import Btn from '../components/shared/btn/btn';
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
            counter: 0
        }
        console.log(props);
        this.ChangeDef = this.ChangeDef.bind(this);
        this.CountUp = this.CountUp.bind(this);
        this.CountDown = this.CountDown.bind(this);
        this.CountRandom = this.CountRandom.bind(this);
    }
    ChangeDef = () => {
        this.setState({ isDef: !this.state.isDef });
        console.log(this.state);
    }
    CountUp = () => {
        if (this.state.counter < this.state.flashCardDecks[this.state.deckLang].cardVocab.length - 1) {
            this.setState({ counter: this.state.counter + 1 });
        } else {
            this.setState({ counter: 0 });
        }
    }
    CountDown = () => {
        if (this.state.counter > 0) {
            this.setState({ counter: this.state.counter - 1 });
        } else {
            this.setState({ counter: 9 });
        }
    }

    CountRandom = () => {
        let tempInt = Math.floor(Math.random() * (this.state.flashCardDecks[this.state.deckLang].cardVocab.length));
        while (tempInt === this.state.counter) {
            tempInt = Math.floor(Math.random() * (this.state.flashCardDecks[this.state.deckLang].cardVocab.length));
        }
        this.setState({ counter: tempInt });
    }
    render() {
        if (!this.state.loaded) {
            return (
                <h1>Loading!</h1>
            )
        } else {
            return (
                <Container>
                    <Row className='mx-5'>
                        <FlipText isDef={this.state.isDef} />
                        <FlashCard onClick={this.ChangeDef} isDef={this.state.isDef} text={this.state.isDef ? this.state.flashCardDecks[this.state.deckLang].cardDescription[this.state.counter] : this.state.flashCardDecks[this.state.deckLang].cardVocab[this.state.counter]} />
                        <Btn text='Previous' onClick={this.CountDown} btnStyle='flashButton' />
                        <Btn text='Random' onClick={this.CountRandom} btnStyle='mx-1 flashButton' />
                        <Btn text='Next' onClick={this.CountUp} btnStyle='flashButton' />
                    </Row>
                </Container >
            )
        }
    }
}


export default flashPage;
