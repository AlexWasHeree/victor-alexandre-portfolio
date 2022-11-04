import React from 'react';
import Button from '../Utils/Button/Button';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  project,
  description,
  src,
  mockup,
  rightCard,
  ...rest
}) => {
  if (!rightCard)
    return (
      <div className={styles.card}>
        <div className={styles.text} data-aos="fade-right">
          <h2>{project}</h2>
          <p>{description}</p>
          <a href={src} target="_blank" rel="noopener noreferrer">
            <Button content="Visit" color="#8870BC" />
          </a>
        </div>
        <div className={styles.mockup} data-aos="fade-left">
          {mockup}
        </div>
      </div>
    );
  else
    return (
      <div className={styles.card}>
        <div className={styles.mockup} data-aos="fade-right">
          {mockup}
        </div>
        <div className={styles.text} data-aos="fade-left">
          <h2>{project}</h2>
          <p>{description}</p>
          <a href={src} target="_blank" rel="noopener noreferrer">
            <Button content="Visit" color="#8870BC" />
          </a>
        </div>
      </div>
    );
};

export default ProjectCard;
