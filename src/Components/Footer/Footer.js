import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Github } from '../../Assets/github.svg';
import { ReactComponent as Behance } from '../../Assets/behance.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg';

const Footer = () => {
  return (
    <div className={styles.background}>
      <footer className={`${styles.content} container`}>
        <h1>Contact me</h1>
        <div className={styles.contactInfo}>
          <h3>+55 83 98646-3470</h3>
          <h3>victoralexandre2303@gmail.com</h3>
          <h3>Campina Grande - PB - Brazil</h3>
        </div>
        <div className={styles.socials}>
          <Github width="42" height="42" />
          <Behance width="42" height="42" />
          <Linkedin width="42" height="42" />
        </div>
      </footer>
      <h3 className={styles.developedBy}>
        Developed by <strong>Victor Alexandre</strong>
      </h3>
    </div>
  );
};

export default Footer;
