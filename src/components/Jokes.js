import React,{Component} from 'react';

const Joke = ({ joke : {setup , punchline} }) =>{

return <p style={{margin: 20}}>{setup} <em>{punchline}</em></p>
}


class Jokes extends Component{
    state = {joke: {},jokes: [] };

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then( response => response.json() ) // equivalent to .then( response => { return ( response.json() ) });
        .then(json => this.setState( { joke: json } ) )
        .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState( { jokes: json } ) )
        .catch(error => alert(error.message));
    }

    render(){
        return(
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke} />
                <hr />
                <h3>Want ten new Jokes ?</h3>
                <button onClick={this.fetchJokes}>Click Me!</button>
                <div>
                    {
                        this.state.jokes.map( JOKE => (
                        <Joke key = {JOKE.id} joke={JOKE} />
                        )
                        )
                    }
                </div>

            </div>
        )
    }
}

export default Jokes;