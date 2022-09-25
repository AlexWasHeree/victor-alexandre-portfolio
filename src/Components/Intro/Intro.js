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
          <h2>
            Front-end developer & <br /> ux/ui designer
          </h2>
          <Button content="Download CV" />
        </div>
        <div className={styles.introImage}>
          <HandCoding />
        </div>
      </div>
    </div>
  );
};

export default Intro;
