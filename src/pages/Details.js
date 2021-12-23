import React from 'react';
import NavBar from '../component/nav/navBar';
import PlaneDetails from '../component/plane/planeDetails';
import Layout from '../component/wrapper/Layout';

const Details = () => (
  <Layout preAnimation="fadeIn">
    <div style={{ display: 'flex', flexDirection: 'row', width: '100vw' }}>
      <NavBar />
      <PlaneDetails />
    </div>
  </Layout>
);

export default Details;
