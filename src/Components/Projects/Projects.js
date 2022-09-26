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
        <ProjectCard
          project="Bikcraft"
          description="Bikcraft is a website that sells eletric bikes. It was made
          only with HTML, CSS and javascript. I realized this project 
          during the Origamid classes as my first project there. "
          src="https://github.com/AlexWasHeree/Bikcraft"
          mockup={<Imac />}
          rightCard
        />
        <ProjectCard
          project="Dogs"
          description="Dogs is a social network for photos of dogs containing info
          like weight, name and race. It was made with React.js and 
          consumes an API made on Wordpress. It was my last project
          from Origamid."
          src="https://github.com/AlexWasHeree/Dogs"
          mockup={<Iphone />}
        />
      </div>
    </div>
  );
};

export default Projects;
