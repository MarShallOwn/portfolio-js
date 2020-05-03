import React from 'react';
import PROJECTS from '../data/projects';



const Project = props => {
        const {title, image, description, link} = props.project;

        return(
            <div className="row" style={{display: 'inline-block',margin: "10px 15px",width: 400}}>
            <h3>{title}</h3>
            <img src={image} alt='profile' style={{height: 150}} />
            <p>{description}</p>
            <a href={link}>{link}</a>
            </div>
        )
}


const Projects = () => (
            <div>
                <h2>Highlighted Projects</h2>
            <div style={{margin: "25px 0 35px 0"}} className="col-md-12">
                {
                    PROJECTS.map( PROJECT => (
                            <Project key={PROJECT.id} project={PROJECT} />
                        )
                    )
                }
            
                <hr />
            </div>
            </div>
        )
        
export default Projects;