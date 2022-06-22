import React from 'react';
import Image from 'next/image';
import Router from 'next/router';

import Button from '@/common/Button';
import appRoutes from '@/constants/appRoutes';
import styles from './Home.module.scss';

const Home = () => {
  const navigateToDogsPage = () => {
    Router.push(appRoutes.DOGS);
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <Image
          src="/images/logo.svg"
          alt="React Logo"
          className={styles.appLogo}
          width={200}
          height={200}
        />
        <Button onClick={navigateToDogsPage}>
          Move to dogs page
        </Button>
      </header>
    </div>
  );
};

export default Home;
