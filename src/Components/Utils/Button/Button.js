import React from 'react';
import '../../../App.css';
import styles from './Button.module.css';

const Button = ({ content, color }) => {
  return (
    <button className={styles.button}>
      <p className="functional" style={{ color: `${color}` }}>
        {content}
      </p>
    </button>
  );
};

export default Button;
