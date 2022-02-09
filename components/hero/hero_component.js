import React from 'react';
import config from '../../config/config';
import styles from './Hero.module.css';

const HeroComponent = () => {
  return (
    <div className={styles.container}>
      <h4>
        Welcome to{' '}
        <span className='text-uppercase fw-bold'>{config.logo_text}</span> Store
      </h4>
      <h1>
        Awesome Product{' '}
        <span className={styles.highlight_text}>Collection</span> In{' '}
        {new Date().getFullYear()}
      </h1>
    </div>
  );
};

export default HeroComponent;
