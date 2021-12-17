import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanes } from '../redux/slices/planesSlice';
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
      <div className="plane_cnt">
        {showPlanes(entities)}
      </div>

    </>
  );
};

export default PlaneManager;
