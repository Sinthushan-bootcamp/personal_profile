import React from 'react';
import '../../styles/Resume.css';

export default function Resume() {
  return (
    <section id="resumeContainer">
        <h2>Resume</h2>
        <p><a href="./Sinthushan Sooriyakumar Resume.pdf" download>Link to my resume</a></p>
        <h3>Technologies</h3>
        <ul>
            <li>
                <img className='techImg' src="./assets/JavaScript-logo.PNG" alt="Javascript logo" />
            </li>
            <li>
                <img className='techImg' src="./assets/1200px-Node.js_logo.svg.png" alt="Node logo" />
            </li>
            <li>
                <img className='techImg' src="./assets/React-icon.svg.png" alt="React logo" />
            </li>
            <li>
                <img className='techImg' src="./assets/MongoDB_Logo.svg.png" alt="MongoDB logo" />
            </li>
            <li>
                <img className='techImg' src="./assets/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" alt="MYSQL logo" />
            </li>
            <li>
                <img className='techImg' src="./assets/how-tailwind-css-help-reduce-workload-by-jefrydco.833f9b8.jpg" alt="Tailwind Logo" />
            </li>
        </ul>
    </section>
  );
}