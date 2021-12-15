/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import {
  createReservations, fetchReservations, selectAllReservations, selectReservationById,
} from '../redux/slices/reservationsSlice';
import Reservation from './reservation/reservation';
import style from '../assets/reservation.module.css';
import 'react-calendar/dist/Calendar.css';

const ReservationManager = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const { id } = useParams();
  const entities = useSelector((state) => selectAllReservations(state));
  const status = useSelector((state) => state.reservations.status);

  const handleSubmit = async () => {
    if (value !== null) {
      dispatch(createReservations({ id, value }));
    }
  };

  useEffect(() => {
    dispatch(fetchReservations(id));
  }, [dispatch]);

  useEffect(() => {
    if (status === 'created') {
      dispatch(fetchReservations(id));
    }
  }, [dispatch]);

  return (
    <div className={style.cnt}>
      <div className={style.filter}>
        <div className={style.content_cnt}>
          <Link to="/main"><ImArrowLeft className={style.icon} /></Link>
          <p>BOOK YOUR PLANE</p>
          <hr className={style.line} />
          <p>There is always a plane that fit your needs!</p>
          <p>
            Choose a date to book your plane. Keep in mind that the plane
            is going to be in your service for 24 hours
          </p>
          <Calendar
            onChange={onChange}
            value={value}
          />
          <button type="button" onClick={() => handleSubmit()} className={style.button}>Book now</button>
        </div>
      </div>
    </div>
  );
};

export default ReservationManager;
