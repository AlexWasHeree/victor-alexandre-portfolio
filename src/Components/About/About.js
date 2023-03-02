import React from 'react';
import styles from './About.module.css';
import { ReactComponent as Deco1 } from '../../Assets/deco-1.svg';
import { ReactComponent as Deco2 } from '../../Assets/deco-2.svg';
import { ReactComponent as Deco3 } from '../../Assets/deco-3.svg';
import { ReactComponent as Deco4 } from '../../Assets/deco-4.svg';

const About = () => {
  return (
    <div id="about" className={styles.background}>
      <div className={`${styles.content} container`}>
        <h1>Sobre</h1>
        <div data-aos="fade-up" className={styles.text}>
          <p>
            Sou um estudante de Ciência da Computação atualmente matriculado na
            Universidade Federal de Campina Grande, e venho estudando
            programação desde 2019. Tenho trabalhado em vários projetos que me
            permitiram desenvolver minhas habilidades em diferentes áreas, como
            frontend, backend e UX/UI design. Estou sempre buscando aprender
            mais e aprimorar minhas habilidades, e tenho paixão pelo que faço.
            Como entusiasta da tecnologia, estou muito animado para continuar
            crescendo e prosperando neste mercado em constante evolução.
          </p>
        </div>
        <Deco1 className={`${styles.decorations} ${styles.deco1}`} />
        <Deco2 className={`${styles.decorations} ${styles.deco2}`} />
        <Deco3 className={`${styles.decorations} ${styles.deco3}`} />
        <Deco4 className={`${styles.decorations} ${styles.deco4}`} />
      </div>
    </div>
  );
};

export default About;
