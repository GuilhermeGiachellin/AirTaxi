/* eslint-disable react/jsx-key */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanes } from '../redux/slices/planesSlice';
import NavBar from './nav/navBar';
import Plane from './plane/plane';

const PlaneManager = () => {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.planes);

  const showPlanes = (list) => Object.entries(list).map((plane) => (
    <Plane key={plane[1].id} params={plane[1]} />
  ));

  useEffect(() => {
    dispatch(fetchPlanes());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <div className="plane_cnt">
        {showPlanes(entities)}
      </div>

    </>
  );
};

export default PlaneManager;
