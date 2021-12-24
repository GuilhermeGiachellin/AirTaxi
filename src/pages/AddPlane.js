import React from 'react';
import CreatePlaneForm from '../component/myForm/CreatePlaneForm';
import NavBar from '../component/nav/navBar';
import Layout from '../component/wrapper/Layout';
import styles from './pages.module.scss';

const AddPlane = () => (
  <Layout preAnimation="fadeIn">
    <div className={styles.pageContainer}>
      <NavBar />
      <CreatePlaneForm />
    </div>
  </Layout>
);

export default AddPlane;
