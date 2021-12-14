/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import {
  createReservations, fetchReservations, selectAllReservations, selectReservationById,
} from '../redux/slices/reservationsSlice';
import Reservation from './reservation/reservation';

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
    // if (status === 'created' || status === 'idle') {
    console.log('Reservation Created1');
    dispatch(fetchReservations(id));
    // }
  }, [dispatch]);

  useEffect(() => {
    if (status === 'created') {
      console.log('Reservation Created2');
      dispatch(fetchReservations(id));
    }
  }, [dispatch]);

  return (
    <div>
      <p>RESERVAS</p>
      <p>
        Date:
        {' '}
        { status }
        <ul>
          {entities.map((res) => (
            <Reservation key={res.id} data={res} />
          ))}
        </ul>
        <div>
          <Calendar
            onChange={onChange}
            value={value}
          />
        </div>
        <button type="button" onClick={() => handleSubmit()}>CREATE RESERVE</button>
      </p>
    </div>
  );
};

export default ReservationManager;
