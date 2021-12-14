import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectPlaneById } from '../../redux/slices/planesSlice';

const PlaneDetails = () => {
  const { id } = useParams();
  const entities = useSelector((state) => selectPlaneById(state, id));
  return (
    <div>
      { console.log(entities) }
      PLANE DETAILS PAGE
    </div>
  );
};

export default PlaneDetails;
