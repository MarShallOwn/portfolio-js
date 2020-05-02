import React, { Component } from 'react';
import { appendFileSync } from 'fs';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Profile from '../assets/Profile(2).jpeg';
import Title from './Title';

class App extends Component{

state = ({displayBio : false});

toggleDisplayBio = () => {
    this.setState( { displayBio : !this.state.displayBio } );
}

    render(){

        const bio = this.state.displayBio ? (
        <div>
        <p>I live in egypt, and i code everyday.</p>
        <p>My favorite language is c#, and i think react is awesome</p>
        <p>besides coding, I also love baskeball and burger</p>
        <button onClick = {this.toggleDisplayBio}>Show Less</button>
    </div>) : (<div>
        <button onClick = {this.toggleDisplayBio} >Read More</button>
    </div>);

        return(
            <div>
                <img style={{transform: "rotate(-1deg)"}} src={Profile} className="Image" />
                <h1>Hello</h1>
                <p>My Name Is Marwan.</p>
                { this.state.displayBio ? <Title /> : null }
                <Title />
                <p>I'm always looking forward to working on meaningfull projects.</p>
                {bio}
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;




/*
    constructor(){
        super();
        this.state ={ displayBio : false };

        console.log('Component this' , this);

       // this.readMore = this.readMore.bind(this);
       // this.showLess = this.showLess.bind(this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
*/

/*
readMore(){
    console.log('readMore this', this);
    this.setState( { displayBio:true } );    
}

showLess(){
    this.setState( { displayBio : false } );
}
*/