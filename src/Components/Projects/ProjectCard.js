import React from 'react';
import Button from '../Utils/Button/Button';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, description, src, mockup }) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h2>{project}</h2>
        <p>{description}</p>
        <a href={src}>
          <Button content="Visit" color="#8870BC" />
        </a>
      </div>
      <div className={styles.mockup}>{mockup}</div>
    </div>
  );
};

export default ProjectCard;
