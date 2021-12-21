/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import style from './reservation.module.css';

const Reservation = ({ data }) => {
  const date = new Date(data.reserve_date).toDateString().slice(0, 15);

  return (
    <li className={style.list}>
      <p>{date}</p>
    </li>
  );
};

export default Reservation;
