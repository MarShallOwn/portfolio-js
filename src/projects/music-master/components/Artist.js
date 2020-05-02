import React from 'react';

const Artist = ({artist}) => {
   
    if(!artist){
        return null;
    }

    const {name,images,followers,genres} = artist;

    const style = {
        height: 250,
        width: 250,
        borderRadius: 1000,
        objectFit: 'cover'
    };

    return(
        <div>
            <h2>{name}</h2>
            <h2>{followers.total} Followers</h2>
            <h2>{genres.join(', ')}</h2>
            <img style={style}  src={images[0] && images[0].url} alt="artist-profile" />
        </div>
    )
}

export default Artist;