import React from 'react';
import styles from './index.module.css';

const Footer: React.FC = ({ children }) => (
  <footer className={styles.outer}>
    <div className={styles.inner}>{children}</div>
  </footer>
);

export default Footer;
