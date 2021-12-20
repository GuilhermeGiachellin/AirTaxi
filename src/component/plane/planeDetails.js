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
    <div>
      <NavBar />
      <ul>
        <li>
          <h3>
            Model:
            {' '}
            {entities.model}
          </h3>
        </li>
        <li>
          <h3>
            Registration:
            {' '}
            {entities.registration}
          </h3>
        </li>
        <li>
          <h3>
            Cruise speed:
            {' '}
            {entities.cruise_speed}
          </h3>
        </li>
        <li>
          <h3>
            Tour Price:
            {' '}
            {entities.tour_price}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default PlaneDetails;
