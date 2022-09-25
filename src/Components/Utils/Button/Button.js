import React from 'react';
import '../../../App.css';
import styles from './Button.module.css';

const Button = ({ content }) => {
  return (
    <button className={styles.button}>
      <p className="functional">{content}</p>
    </button>
  );
};

export default Button;
