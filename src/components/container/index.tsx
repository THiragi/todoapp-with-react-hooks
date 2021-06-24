import React from 'react';
import styles from './index.module.css';

const Container: React.FC = ({ children }) => (
  <main className={styles.container}>{children}</main>
);

export default Container;
