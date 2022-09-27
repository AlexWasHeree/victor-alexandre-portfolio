import React from 'react';
import '../../App.css';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Assets/victor-alexandre.svg';
import { ReactComponent as Github } from '../../Assets/github.svg';
import { ReactComponent as Behance } from '../../Assets/behance.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg';

const Header = () => {
  return (
    <div className={styles.background}>
      <header className={styles.header}>
        <div className={`${styles.content} container`}>
          <Logo className={styles.logo} />
          <div className={styles.menu}>
            <h3 className="subFunctional">ABOUT</h3>
            <h3 className="subFunctional">PROJECTS</h3>
            <h3 className="subFunctional">CONTACT</h3>
          </div>
          <div className={styles.socials}>
            <a href="https://github.com/AlexWasHeree">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/victor-alexandre-cavalcanti-macedo-2344a8245/">
              <Behance />
            </a>
            <a href="https://www.linkedin.com/in/victor-alexandre-cavalcanti-macedo-2344a8245/">
              <Linkedin />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
