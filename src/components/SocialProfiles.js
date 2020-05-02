import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {
        const { id, link, image} = props.social_profile;

        return(
            <div style={{display: 'inline-block',margin:10}}>
                <a href={link} target='_blank' ><img src={image} alt='social_profile' style={{height:50}} /></a>
            </div>
        )
}


const SocialProfiles = () => {
        return(
        <div>
            <h2>Connect with me!</h2>
            <div>
            {
                SOCIAL_PROFILES.map( SOCIAL_PROFILE => (
                    <SocialProfile key={SOCIAL_PROFILE.id} social_profile={SOCIAL_PROFILE} />
                    )
                )
            }
            </div>
        </div>
        )
    }

export default SocialProfiles;