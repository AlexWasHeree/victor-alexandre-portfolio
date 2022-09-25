import React from 'react';
import styles from './Projects.module.css';
import { ReactComponent as MacBook } from '../../Assets/MacBook.svg';
import { ReactComponent as Imac } from '../../Assets/iMac.svg';
import { ReactComponent as Iphone } from '../../Assets/iPhone.svg';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className={styles.background}>
      <div className={`${styles.content} container`}>
        <h1>My Projects</h1>
        <ProjectCard
          project="Moview"
          description="Moview is a website where you can rate several movies that 
          are storaged in a database. It was my first project realized on 
          the spring-react week. I used react.js and springboot on this 
          application."
          src="https://alexmoview.netlify.app/"
          mockup={<MacBook />}
        />
      </div>
    </div>
  );
};

export default Projects;
