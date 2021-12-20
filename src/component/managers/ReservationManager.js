/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import {
  createReservations, fetchReservations, selectAllReservations,
} from '../../redux/slices/reservationsSlice';
import style from './reservation.module.css';
import 'react-calendar/dist/Calendar.css';
import './calendar.css';

const mark = new Set([
  '2021-12-23',
  '2021-12-21',
  '2021-12-20',
]);

const ReservationManager = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const { id } = useParams();
  const dates = useSelector((state) => selectAllReservations(state));
  const status = useSelector((state) => state.reservations.status);

  const handleSubmit = async () => {
    if (value !== null) {
      dispatch(createReservations({ id, value }));
    }
  };

  mark.has();

  useEffect(() => {
    dispatch(fetchReservations(id));
  }, [dispatch]);

  return (
    <div className={style.cnt}>
      <div className={style.filter}>
        <div className={style.content_cnt}>
          <Link to="/main"><ImArrowLeft className={style.icon} size={30} /></Link>
          <h2 className={style.title}>BOOK YOUR PLANE</h2>
          <hr className={style.line} />
          <p className={style.description}>
            Choose a date to book your plane that you selected.
            Keep in mind that the plane with all included services are
            disponible for for 24 hours. You can meet the crew in your
            local airport ready for the service.
          </p>
          <Calendar
            onChange={onChange}
            value={value}
            tileClassName={({ date, view }) => {
              console.log(date);
              // console.log(mark.has(date));
              return 'red';
            }}
          />
          <button type="button" onClick={() => handleSubmit()} className={style.button}>Book now</button>
        </div>
      </div>
    </div>
  );
};

export default ReservationManager;