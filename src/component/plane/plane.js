/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../assets/plane.module.css';

const Plane = ({ params }) => {
  return (
    <>
      <div>
        <div>
          <img className={styles.plane_img} src={params.picture} alt="plane" />
        </div>
        <p>{params.model}</p>
        <p>{params.registration}</p>
        <Link to={`reservations/${params.id}`}>See reservations</Link>
        <Link to={`plane/${params.id}`}>See Plane details</Link>
      </div>
    </>
  );
};

export default Plane;
