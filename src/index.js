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

// const history = createBrowserHistory(); we dont need the object because the history is only used once

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/portfolio-js' render={ () => <Header><App/></Header> } /> 
            <Route path='/jokes' render={ () => <Header><Jokes/></Header> } />
            <Route path='/music-master' render={ () => <Header><MusicMaster/></Header> } />
            <Route path='/CountDown' render={() => <Header><CountDown /></Header>} />
        </Switch>
    </Router>,
    document.getElementById('root'));

// (exact) word by itself is equal to (exact = true)
// because in jsx when the property value is equal to true you dont need to write it and it will be understood 


// this is one way of doing the render
{/* <Route exact path='/' render={ () => <Header Component={App} /> } /> 
<Route path='/Jokes' render={ () => <Header Component={Jokes} /> } /> */}













/*
new Promise( (resolve, reject) =>{
    return reject(new Error('No Bears'));

    setTimeout(() => { 
        resolve('Bears, Beets, Battlestar Galactica');
      }, 2000);
})
.then( quotes => {
    console.log(quotes);
})
.catch(error => console.log('error' , error));



new Promise(resolve =>{
    setTimeout(() => {
        console.log('Bears');  
        resolve();
      }, 2000);
})
.then(() => {
    console.log('Beets');
console.log('Battlestar Galactica');
})
*/



































/*
class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log('I am', this.name,'and I am', this.age,'years old');
    }
}

const animal1 = new Animal('simba',3);
animal1.speak();

console.log(animal1);

class Lion extends Animal{
    constructor(name,age,furColor,speed){
        super(name,age);
        this.furColor = furColor;
        this.speed = speed;
    }

    roar(){
        console.log("ROOOR! I have", this.furColor,'fur, and i can run',this.speed,'miles an hour!');
    }
}

const lion1 = new Lion("musfa",20,'golden',25);

lion1.speak();
lion1.roar();
console.log(lion1);*/