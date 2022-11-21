import React from 'react';
import styles from './Projects.module.css';
import { ReactComponent as MacBook } from '../../Assets/MacBook.svg';
import { ReactComponent as Imac } from '../../Assets/iMac.svg';
import { ReactComponent as Iphone } from '../../Assets/iPhone.svg';
import { ReactComponent as IpadCup } from '../../Assets/ipadCupGuesser.svg';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id="projects" className={styles.background}>
      <div className={`${styles.content} container`}>
        <h1>My Projects</h1>
        <ProjectCard
          project="Moview"
          description="Moview is a movie rating website where you
          can rate movies and see a specific movie rating. For the front-end i used React.js and
          bootstrap for the css styles. On the back-end, i used Springboot, making a basic authentication
          system and some simple requests for the movie rating logic."
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
          description="Dogs is a social network for dogs based on instagram. It contains a feed of
          photos with a comment section and info about the dog on the posted picture. It has a infinite
          scrolling feed and a personal feed. For the front-end i used React.js and css modules. The back-end consumes 
          an wordpress API with authentication system."
          src="https://dogs-seven-gules.vercel.app"
          mockup={<Iphone />}
        />
        <ProjectCard
          project="CupGuesser"
          description="CupGuesser is a web application made for doing hunches on Qatar's
          2022 cup games. It has authentication system and saves all the hunches based on
          the profile logged in. For the front-end i used React.js and tailwind for the styling.
          On the back-end it was used node.js with prisma orm and koa for routing and cors configuration."
          src="https://github.com/AlexWasHeree/CupGuesser"
          mockup={<IpadCup />}
          rightCard
        />
      </div>
    </div>
  );
};

export default Projects;
