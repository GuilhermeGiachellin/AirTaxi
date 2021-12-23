import React from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoIosArrowDropright } from 'react-icons/io';
import { selectPlaneById } from '../../redux/slices/planesSlice';
import style from './planeDetails.module.scss';

const PlaneDetails = () => {
  const { id } = useParams();
  const entities = useSelector((state) => selectPlaneById(state, id));
  const navigate = useNavigate();
  const icon = <IoIosArrowDropright className={style.icon_right} size={25} />;

  const handleNavigation = () => {
    navigate(`reservations/${id}`);
  };

  return (
    <>
      <div className={style.container}>
        <Link to="/main" className={style.link}>
          <div className={style.icon_container}>
            <BiLeftArrow className={style.icon_left} size={25} />
          </div>
        </Link>
        <div className={style.image_container}>
          <img className={style.image} src={entities.picture} alt="plane" />
        </div>
        <div className={style.list_container}>
          <ul className={style.ul}>
            <li className={style.title}>
              <h1>
                {entities.model}
              </h1>
            </li>
            <li className={style.list}>
              <p className={style.list_category}>
                Registration
              </p>
              <p>{entities.registration}</p>
            </li>
            <li className={style.list}>
              <p className={style.list_category}>Cruise speed </p>
              <p>
                {entities.cruise_speed}
                {' '}
                Km/h
              </p>
            </li>
            <li className={style.list}>
              <p className={style.list_category}>Tour Price </p>
              <p>
                $
                {entities.tour_price}
              </p>
            </li>
            <li className={style.list}>
              <p className={style.list_category}>Description </p>
              <p>{entities.description}</p>
            </li>
          </ul>
          <button type="button" onClick={handleNavigation} className={style.button}>
            <div>
              Reserve
              {icon}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaneDetails;
