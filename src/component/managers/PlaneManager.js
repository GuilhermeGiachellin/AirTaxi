/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanes, selectAllPlanes } from '../../redux/slices/planesSlice';
import Gallery from '../gallery/Gallery';
import Plane from '../plane/plane';

const PlaneManager = () => {
  const dispatch = useDispatch();
  const entities = useSelector((state) => selectAllPlanes(state));

  const showPlanes = (list) => Object.entries(list).map((plane) => (
    <Plane key={plane[1].id} params={plane[1]} />
  ));

  useEffect(() => {
    dispatch(fetchPlanes());
  }, [dispatch]);

  const groupIn = (n, list) => list.reduce((r, e, i) => (i % n ? r[r.length - 1]
    .push(e) : r.push([e])) && r,
  []);

  return (
    <>
      {entities.length > 0 && (
        <Gallery itemList={groupIn(3, entities)} />
      )}
    </>
  );
};

export default PlaneManager;
