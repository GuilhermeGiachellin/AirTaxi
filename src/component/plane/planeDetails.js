import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { selectPlaneById } from '../../redux/slices/planesSlice';
import NavBar from '../nav/navBar';
import style from './planeDetails.module.css';

const PlaneDetails = () => {
  const { id } = useParams();
  const entities = useSelector((state) => selectPlaneById(state, id));

  return (
    <>
      <NavBar />
      <div className={style.container}>
        <div className={style.image_container}>
          <img className={style.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Messerschmitt_Bf_109E_at_Thunder_Over_Michigan.jpg/1200px-Messerschmitt_Bf_109E_at_Thunder_Over_Michigan.jpg" alt="plane" />
          <Link to="/main" className={style.link}>
            <div className={style.icon_container}>
              <BiLeftArrow className={style.icon} size={25} />
            </div>
          </Link>
        </div>
        <div className={style.list_container}>
          <ul className={style.ul}>
            <li className={style.title}>
              <h1>
                {entities.model}
              </h1>
            </li>
            <li className={style.list}>
              <p>
                Registration:
              </p>
              <p>{entities.registration}</p>
            </li>
            <li className={style.list}>
              <p>Cruise speed: </p>
              <p>
                {entities.cruise_speed}
                {' '}
                Km/h
              </p>
            </li>
            <li className={style.list}>
              <p>Tour Price: </p>
              <p>
                $
                {entities.tour_price}
              </p>
            </li>
            <li className={style.list}>
              <p>{entities.description}</p>
            </li>
          </ul>
          <Link to={`reservations/${id}`}>Reserve</Link>
        </div>
      </div>
    </>
  );
};

export default PlaneDetails;
