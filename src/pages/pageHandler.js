import TitlePage from './titlepage';
import FlashPage from './flashcardpage';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Component } from 'react';

class pageHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardDecks: [{
                deckLang: 'cssDeck',
                cardVocab: [],
                cardDescription: [],
                url: '1wD7HWF3ELELPRP5QvfOAXdl3EkaJMP8KFrGsmItwwMg'
            },
            {
                deckLang: 'jsDeck',
                cardVocab: [],
                cardDescription: [],
                url: '17ll_3oJOJoiq9QbuYHqVCPEz-JB9OiuRk08Eqlj_kcY'
            },
            {
                deckLang: 'htmlDeck',
                cardVocab: [],
                cardDescription: [],
                url: '1TqYavKC7scvsT-sLM5cBb58kbU0pk-vilpFf6p55JQk'
            },
            {
                deckLang: 'cSharpDeck',
                cardVocab: [],
                cardDescription: [],
                url: '13BHhB9NgnfmjhFtHHLxO7qr0glFG8Z5RuaC4LPHY3W8'
            },
            {
                deckLang: 'reactDeck',
                cardVocab: [],
                cardDescription: [],
                url: '1Zp2PYxwP0vcbJygOHnmyKrKkkMzpHsLG5twbmO1lxWQ'
            }
            ],
            loaded:false
        }
        this.setFlashCardDecks = this.setFlashCardDecks.bind(this);
    }
    objectifyer(test){
        let tempObj = {}
        test.forEach(element => {
            tempObj[element.deckLang] = element;
        });
    
        return tempObj;
    }
    
    async FetchJSON(test) {
        return fetch(test).then(
            resp => resp.json()
        ).catch(
            error => console.log(error)
        );
    }
    
    async setFlashCardDecks() {
        let tempArr = [];
        for(let i = 0; i < this.state.cardDecks.length; i++) {
            tempArr[i] = await this.FetchJSON(`https://spreadsheets.google.com/feeds/list/${this.state.cardDecks[i].url}/1/public/full?alt=json`).then(data => data = data.feed.entry);
            for (let y = 0; y < tempArr[i].length; y++) {
                this.state.cardDecks[i].cardVocab.push(tempArr[i][y].gsx$name.$t);
                this.state.cardDecks[i].cardDescription.push(tempArr[i][y].gsx$desctription.$t);
            }
        }
    
        return this.objectifyer(this.state.cardDecks);
    
    };

    componentDidMount() {
        this._asyncRequest = this.setFlashCardDecks().then(
            cardDecks => {
                this._asyncRequest = null;
                this.setState({ cardDecks });
                this.setState({ loaded:true });
                console.log(this.state.cardDecks);
            }
            
        );
    }
    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        if (this.state.loaded === false) {
            return null;
        } else {
            return (
                <Router>
                    <Switch>
                        <Route path='/title' render={() => <TitlePage />} />
                        <Route path="/css">
                            <FlashPage loaded={true} cardDecks={this.state.cardDecks} lang={'cssDeck'} />
                        </Route>
                        <Route path="/js">
                            <FlashPage loaded={true} cardDecks={this.state.cardDecks} lang={'jsDeck'} />
                        </Route>
                        <Route path="/html">
                            <FlashPage loaded={true} cardDecks={this.state.cardDecks} lang={'htmlDeck'} />                        
                        </Route>
                        <Route path="/csharp">
                            <FlashPage loaded={true} cardDecks={this.state.cardDecks} lang={'cSharpDeck'} />                        
                        </Route>
                        <Route path="/react">
                            <FlashPage loaded={true} cardDecks={this.state.cardDecks} lang={'reactDeck'} />                        
                        </Route>
                        <Redirect from='/' to='/title' />
                    </Switch>
                </Router>
            );
        }
    }
}

export default pageHandler;