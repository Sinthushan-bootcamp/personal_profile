import React from 'react';
import '../styles/Project.css';


function Project({project, imageLink, imageAlt, deployedLink, githubLink}) {
    return (
        <figure>
            <img className='projectImage' src={imageLink} alt={imageAlt} />
            <a href={githubLink}><img className='gitImage' src='./assets/icons8-github-64.png' alt='github' /></a>
            <a href={deployedLink}><img className='deployImage' src='./assets/icons8-internet-50.png' alt='deployed' /></a>
            <figcaption>{project}</figcaption>
        </figure>
    );
  }
  
export default Project;