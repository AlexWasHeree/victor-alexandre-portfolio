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
        <h1>About me</h1>
        <div data-aos="fade-up" className={styles.text}>
          <p>
            I am currently a student of Computer Science at The Federal
            University of Campina Grande and have been studying programming and
            design since 2019. So far i learned front-end, ux/ui design and
            motion design. I love what i do and look forward to learn more and
            keep improving my skills.
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
