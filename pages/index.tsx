import React from 'react';
import Image from 'next/image'

import logo from '../public/images/logo.svg';
import styles from '@/containers/Home/Home.module.scss';

const Home = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <Image
        src={logo}
        alt="React Logo"
        className={styles.appLogo}
        width={200}
        height={200}
      />
      <a
        className={styles.appLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default Home;
