/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  createReservations, fetchReservations, selectAllReservations, selectReservationById,
} from '../redux/slices/reservationsSlice';

const Reservation = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const entities = useSelector((state) => selectAllReservations(state));
  useEffect(() => {
    dispatch(fetchReservations(id));
  }, [dispatch]);

  const handleSubmit = async () => {
    dispatch(createReservations(id));
  };

  return (
    <div>
      <p>RESERVAS</p>
      <p>
        Date:
        {/* {entities.reservation_date} */}
        <button type="button" onClick={() => handleSubmit()}>CREATE RESERVE</button>
      </p>
    </div>
  );
};

export default Reservation;
