import React from 'react';
import Image from 'next/image';

import Button from '@/common/Button';
import styles from './Home.module.scss';

const HomePage = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <Image
        src="/images/logo.svg"
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
      <Button>
        Simple button
      </Button>
    </header>
  </div>
);

export default HomePage;
