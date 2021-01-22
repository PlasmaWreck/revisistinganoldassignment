import Btn from '../components/btn/btn';
import TitlePage from './titlepage';
import FlashPage from './flashcardpage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { setFlashCardDecks } from '../components/dataservices/dataservices'
import { Component } from 'react';

class pageHandler extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cardDecks: null
        }
    }

    componentDidMount() {
        this._asyncRequest = setFlashCardDecks().then(
            cardDecks => {
                this._asyncRequest = null;
                this.setState({ cardDecks });
                console.log(this.state.cardDecks);
                this.forceUpdate();
            }
        );
    }
    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    render() {
        if (this.state.cardDecks === null) {
            console.log('loadim,mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmng');
            return (
                <Btn />
            )
        } else {
            return (
                <Router>
                    <Switch>
                        <Route path='/title' render={() => <TitlePage />} />
                        <Route path="/css">
                            <FlashPage loaded={true} cardDecks={this.state.cardDecks} lang={'cssDeck'} />
                        </Route>
                        <Route path="/js">
                            <Btn text='CSS' colSize='10' as={Link} to='/css' />
                        </Route>
                        <Route path="/html">
                            <Btn text='CSS' colSize='10' as={Link} to='/css' />
                        </Route>
                        <Route path="/csharp">
                            <Btn text='CSS' colSize='10' as={Link} to='/css' />
                        </Route>
                        <Redirect from='/' to='/title' />
                    </Switch>
                </Router>
            );
        }
    }
}

export default pageHandler;