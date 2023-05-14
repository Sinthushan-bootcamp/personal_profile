import React from 'react';
import Project from "../Project";
import '../../styles/Project.css';
const projects = [
    {
        name : 'Just Another Text Editor',
        imageLink : './assets/JATE_SCREENSHOT.PNG',
        imgAlt: 'Just Another Text Editor screenshot',
        githubLink : 'https://github.com/sinthushan/just_another_text_editor',
        deployedLink : 'https://dry-lowlands-41404.herokuapp.com/'
    },
    {
        name : 'Traveling Event Planner',
        imageLink : './assets/TravelingEventPlanner_SCREENSHOT.PNG',
        imgAlt: 'Traveling Event Planner screenshot',
        githubLink : 'https://github.com/Project1Group6/ticketmaster-event-planner',
        deployedLink : 'https://project1group6.github.io/ticketmaster-event-planner/'
    },
    {
        name : 'Weather Dashboard',
        imageLink : './assets/WeatherDash_SCREENSHOT.PNG',
        imgAlt: 'Weather Dashboard screenshot',
        githubLink : 'https://github.com/sinthushan/WeatherDashboard',
        deployedLink : 'https://sinthushan.github.io/WeatherDashboard/'
    },
    {
        name : 'Rent My Stuff',
        imageLink : './assets/RENTMYSTUFF_SCREENSHOT.PNG',
        imgAlt: 'Rent My Stuff screenshot',
        githubLink : 'https://github.com/proj2team5/rent_my_stuff',
        deployedLink : 'https://secret-hollows-64307.herokuapp.com/'
    },
    {
        name : 'Tech Blog',
        imageLink : './assets/TechBlog_SCREENSHOT.PNG',
        imgAlt: 'Tech Blog screenshot',
        githubLink : 'https://github.com/sinthushan/techBlog',
        deployedLink : 'https://quiet-gorge-51545.herokuapp.com/'
    },
    {
        name : 'Work Day Scheduler',
        imageLink : './assets/Workday_SCREENSHOT.PNG',
        imgAlt: 'Work Day Scheduler screenshot',
        githubLink : 'https://github.com/sinthushan/Work-Day-Scheduler',
        deployedLink : 'https://sinthushan.github.io/Work-Day-Scheduler/'
    }
]


export default function Projects() {
    return (
      <section id="projects">
          <h2>Projects</h2>
          <article id="projectContainer">
            {projects.map((project) => {
                return (
                    <Project 
                        project={project.name} 
                        imageLink={project.imageLink} 
                        imageAlt={project.imgAlt} 
                        deployedLink={project.deployedLink} 
                        githubLink={project.githubLink}
                    />
                );
            })}  
          </article>
      </section>
    );
  }