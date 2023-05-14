import React from 'react';
import '../styles/Project.css';


function Project({project, imageLink, imageAlt, deployedLink, githubLink}) {
    return (
        <figure>
            <img src={imageLink} alt={imageAlt} />
            <figcaption>{project}</figcaption>
        </figure>
    );
  }
  
export default Project;