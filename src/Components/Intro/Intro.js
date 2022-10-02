import React from 'react';
import '../../App.css';
import Button from '../Utils/Button/Button';
import styles from './Intro.module.css';
import { ReactComponent as HandCoding } from '../../Assets/Hand-coding.svg';

const Intro = () => {
  return (
    <div className={styles.background}>
      <div className={`${styles.content} container`}>
        <div className={styles.introText}>
          <h3>Hello! i'm</h3>
          <h1>Victor Alexandre</h1>
          <h2>Front-end developer &</h2>
          <h2 className={styles.bottom}>ux/ui designer</h2>
          <a
            href="https://drive.google.com/file/d/1l0uAo9S9Pb7qlXTtdhIOZDv4kqvnJmHs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            download="resume.pdf"
          >
            <Button className={styles.button} content="Download CV" />
          </a>
        </div>
        <div className={styles.introImage}>
          <HandCoding />
        </div>
      </div>
    </div>
  );
};

export default Intro;
