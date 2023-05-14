import React from 'react';
import '../../styles/About.css';

export default function About() {
  return (
    <section id="about">
        <h2>About Me</h2>
        <div className='aboutContainer'>
          <img src="./assets/ProfilePic.jpg" alt="the developer" />
          <article>
              <p>
                  My name is Sinthushan and I am a programmer living in the Toronto area. I am interested in fullstack web
                  development and am currently enrolled in a part time bootcamp offered at UofT. I enjoy doing backend using Express and
                  Sequelize as the ORM but also have a good handle on frontend technology such as React and HandleBars.
              </p>
              <p>
                  Apart from coding I also enjoy travel. I have been to 5 of the 7 continents with Australia and
                  Antarctica remaining which I hope to visit soon.
              </p>
          </article>
        </div>
    </section>
  );
}