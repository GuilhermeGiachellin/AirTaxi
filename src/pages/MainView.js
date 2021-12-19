import React from 'react';
import PlaneManager from '../component/PlaneManager';
import NavBar from '../component/nav/navBar';

const MainView = () => (
  <div style={{ display: 'flex', flexDirection: 'row', width: '100vw' }}>
    <NavBar />
    <PlaneManager />
  </div>
);

export default MainView;
