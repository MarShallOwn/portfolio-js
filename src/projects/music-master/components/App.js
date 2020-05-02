import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';

class App extends Component{

    state = {artist: null,topTracks: []};

    componentDidMount(){
        this.searchArtist("vicetone");
    }

    searchArtist = artistQuery =>{
          fetch(`https://spotify-api-wrapper.appspot.com/artist/${artistQuery}`)
          .then(response => response.json())
          .then(json => {
          if(json.artists.total > 0){
              const artist = json.artists.items[0];
  
              this.setState({artist: artist});
          fetch('https://spotify-api-wrapper.appspot.com/artist/'+this.state.artist.id+'/top-tracks')
          .then(response => response.json())
          .then(json => this.setState({topTracks: json.tracks}) )
          .catch(error => {});
        }

    })
    .catch(error => {});

        }

    render(){
        return(
            <div>
                <h2>Music Master</h2>
                <Search searchArtist={this.searchArtist} />
                <Artist artist={this.state.artist} />
                <Tracks tracks={this.state.topTracks} />
            </div>
        )
    }
}

export default App;