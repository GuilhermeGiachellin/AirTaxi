import React from 'react';
import NavBar from '../component/nav/navBar';
import PlaneDetails from '../component/plane/planeDetails';
import Layout from '../component/wrapper/Layout';
import styles from './pages.module.scss';

const Details = () => (
  <Layout preAnimation="fadeIn">
    <div className={styles.pageContainer}>
      <NavBar />
      <PlaneDetails />
    </div>
  </Layout>
);

export default Details;
