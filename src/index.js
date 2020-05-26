import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from './components/App';
import Jokes from './components/Jokes';
import MusicMaster from './projects/music-master';
import './index.css';
import Header from './components/Header';
import CountDown from './components/CountDown';

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/portfolio-js' render={ () => <Header><App/></Header> } /> 
            <Route path='/portfolio-js/jokes' render={ () => <Header><Jokes/></Header> } />
            <Route path='/portfolio-js/music-master' render={ () => <Header><MusicMaster/></Header> } />
            <Route path='/portfolio-js/CountDown' render={() => <Header><CountDown /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root'));