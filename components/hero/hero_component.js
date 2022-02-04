import React from 'react';
import styles from './Hero.module.css';

const HeroComponent = () => {
  return (
    <div className={styles.container}>
      <h4>Welcome to Uniqlo Store</h4>
      <h1>
        Awesome Product{' '}
        <span className={styles.highlight_text}>Collection</span> In 2022
      </h1>
    </div>
  );
};

export default HeroComponent;
