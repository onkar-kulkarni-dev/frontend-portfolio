import React from "react";
import styles from './Footer.module.scss';

type Props = {};

const Footer: React.FC<Props> = () => {
  const date = new Date();
  const monthName = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const lastUpdated = `${monthName} ${year}`;
  return <footer className={styles.footer}>
    <p className={styles.devName}>Onkar.Dev</p>
    <p className={styles.copyrights}>&copy; 2026 Onkar Kulkarni. All rights reserved.</p>
    <p className={styles.lastUpdated}><span className={styles.dotStatus} />Last updated: {lastUpdated}</p>
  </footer>;
};

export default Footer;
