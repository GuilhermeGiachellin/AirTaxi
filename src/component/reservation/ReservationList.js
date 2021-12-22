/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import style from './reservation.module.css';

const ReservationList = ({ data }) => {
  const date = new Date(data.reserve_date);

  const addDays = (date, days) => {
    const result = date;
    date.setDate(result.getDate() + days);
    return result.toDateString().slice(0, 15);
  };

  return (
    <li className={style.list}>
      <p>{addDays(date, 1)}</p>
    </li>
  );
};

export default ReservationList;
