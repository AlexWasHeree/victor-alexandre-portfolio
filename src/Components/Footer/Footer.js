import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Github } from '../../Assets/githubCopy.svg';
import { ReactComponent as Behance } from '../../Assets/behanceCopy.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedinCopy.svg';

const Footer = () => {
  return (
    <div id="contact" className={styles.background}>
      <footer className={`${styles.content} container`}>
        <h1>Contato</h1>
        <div className={styles.contactInfo}>
          <a href="tel:+5583986463470">
            <h3>+55 (83) 98646-3470</h3>
          </a>
          <a href="mailto:victoralexandre2303@gmail.com">
            <h3>victoralexandre2303@gmail.com</h3>
          </a>
          <h3>Campina Grande - PB - Brasil</h3>
        </div>
        <div className={styles.socialsFooter}>
          <a href="https://github.com/AlexWasHeree">
            <Github
              width="42"
              height="42"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a href="https://www.linkedin.com/in/victor-alexandre-cavalcanti-macedo-2344a8245/">
            <Behance
              width="42"
              height="42"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
          <a href="https://www.behance.net/8c277545">
            <Linkedin
              width="42"
              height="42"
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </footer>
      <h3 className={styles.developedBy}>
        Developed by <strong>Victor Alexandre</strong>
      </h3>
    </div>
  );
};

export default Footer;
