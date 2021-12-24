import React, { useEffect, useState } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import { AnimateSharedLayout, motion } from 'framer-motion';
import {
  createReservations, fetchReservations, reset, selectAllReservations,
} from '../../redux/slices/reservationsSlice';
import style from './reservationManager.module.scss';
import 'react-calendar/dist/Calendar.css';
import ReservationList from '../reservation/ReservationList';
import useToggle from '../customHooks/useToggle';
import PopUp from '../popups/PopUp';

const ReservationManager = () => {
  const [value, onChange] = useState(new Date());
  const dispatch = useDispatch();
  const { id } = useParams();
  const dates = useSelector((state) => selectAllReservations(state));
  const { status } = useSelector((state) => state.reservations);
  const [toggle, setToggle] = useToggle(['close', 'open']);
  const navigate = useNavigate();
  const icon = <ImArrowLeft size={30} />;

  const handleNavigation = () => {
    navigate('/main');
  };

  const handleSubmit = async () => {
    if (value !== null) {
      dispatch(createReservations({ id, value }));
    }
  };

  const getDate = (dates) => new Set(dates.map((date) => date.reserve_date));

  const showReservations = () => {
    setToggle(1);
  };

  const handleReset = () => {
    dispatch(reset());
    navigate('/main');
  };

  useEffect(() => {
    dispatch(fetchReservations(id));
  }, [dispatch]);

  return (
    <div className={style.container}>
      <div className={style.filter}>
        <div className={style.content_cnt}>
          <button type="button" onClick={handleNavigation} className={style.icon}>{icon}</button>
          <h2 className={style.title}>BOOK YOUR PLANE</h2>
          <hr className={style.line} />
          <p className={style.description}>
            Choose a date to book your plane that you selected.
            Keep in mind that the plane with all included services are
            disponible for for 24 hours. You can meet the crew in your
            local airport ready for the service.
          </p>
          <AnimateSharedLayout>
            <motion.div style={{
              display: 'flex', gap: '2rem', alignItems: 'center', height: '400',
            }}
            >
              { dates.length >= 0 && (
                <motion.div layout>
                  <Calendar
                    onChange={onChange}
                    value={value}
                    tileDisabled={({ date }) => {
                      const temp = date.toISOString().slice(0, 10);
                      if (getDate(dates).has(temp)) {
                        return true;
                      }
                      return false;
                    }}
                  />
                </motion.div>
              )}
              { toggle === 'open' && (
              <motion.div
                className={style.dates}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                layout
              >
                <ul>
                  {dates.map((res) => (
                    <ReservationList key={res.id} data={res} />
                  ))}
                </ul>
              </motion.div>
              )}

            </motion.div>
          </AnimateSharedLayout>
          <button type="button" onClick={() => showReservations()} className={style.button}>Reserved dates</button>
          <button type="button" onClick={() => handleSubmit()} className={style.button}>Book now</button>
          { status === 'created' && (
            <PopUp handleInput={handleReset} message="Date Reserved!" skip />
          )}
          { status === 'error' && (
            <PopUp handleInput={handleReset} message="Date already reserved! :C" skip />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationManager;
