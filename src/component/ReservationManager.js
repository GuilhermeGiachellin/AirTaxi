/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
      <p>RESERVAS</p>
      <div>
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
      <button type="button" onClick={() => handleSubmit()}>CREATE RESERVE</button>

    </div>
  );
};

export default ReservationManager;
