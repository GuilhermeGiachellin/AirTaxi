import React from 'react';
import PlaneManager from '../component/managers/PlaneManager';
import NavBar from '../component/nav/navBar';
import Layout from '../component/wrapper/Layout';

const MainView = () => (
  <Layout preAnimation="fadeIn">
    <div style={{ display: 'flex', flexDirection: 'row', width: '100vw' }}>
      <NavBar />
      <PlaneManager />
    </div>
  </Layout>
);

export default MainView;
