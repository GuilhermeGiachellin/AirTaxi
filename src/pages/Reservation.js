import React from 'react';
import ReservationManager from '../component/managers/ReservationManager';
import Layout from '../component/wrapper/Layout';

const Reservation = () => (
  <Layout preAnimation="fadeIn">
    <div style={{ width: '100vw' }}>
      <ReservationManager />
    </div>
  </Layout>
);

export default Reservation;
