import React from 'react';
import '../../App.css';
import styles from './Header.module.css';
import '../Utils/hamburguer/hamburguer.css';
import { ReactComponent as Logo } from '../../Assets/victor-alexandre.svg';
import { ReactComponent as Github } from '../../Assets/github.svg';
import { ReactComponent as Behance } from '../../Assets/behance.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedin.svg';

const Header = () => {
  const [active, setActive] = React.useState('');
  const [aside, setAside] = React.useState('');

  function handleClick() {
    if (active === '' && aside === '') {
      setActive('is-active');
      setAside(styles.ativo);
    } else {
      setActive('');
      setAside('');
    }
  }

  return (
    <div className={styles.background}>
      <header className={`animeUp ${styles.header}`}>
        <div className={`${styles.content} container`}>
          <a href="#intro">
            <Logo className={styles.logo} />
          </a>
          <div className={styles.menu}>
            <a href="#about" className="subFunctional">
              SOBRE
            </a>
            <a href="#projects" className="subFunctional">
              PROJETOS
            </a>
            <a href="#contact" className="subFunctional">
              CONTATO
            </a>
          </div>
          <div className={styles.socials}>
            <a
              href="https://github.com/AlexWasHeree"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://www.behance.net/8c277545"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Behance />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-alexandre-cavalcanti-macedo-2344a8245/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <button
            onClick={handleClick}
            className={`${active} ${styles.menuHamburguer} hamburger hamburger--elastic`}
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <aside id="id" className={`${aside} ${styles.menuLateral}`}>
            <div>
              <a href="#about" className="subFunctional">
                SOBRE
              </a>
            </div>
            <div>
              <a href="#projects" className="subFunctional">
                PROJETOS
              </a>
            </div>
            <div>
              <a href="#contact" className="subFunctional">
                CONTATO
              </a>
            </div>
          </aside>
        </div>
      </header>
    </div>
  );
};

export default Header;
