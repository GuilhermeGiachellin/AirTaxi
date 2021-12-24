import React from 'react';
import PlaneManager from '../component/managers/PlaneManager';
import NavBar from '../component/nav/navBar';
import Layout from '../component/wrapper/Layout';
import styles from './pages.module.scss';

const MainView = () => (
  <Layout preAnimation="fadeIn">
    <div className={styles.pageContainer}>
      <NavBar />
      <PlaneManager />
    </div>
  </Layout>
);

export default MainView;
