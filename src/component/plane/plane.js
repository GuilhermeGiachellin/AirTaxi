/* eslint-disable react/prop-types */
import React from 'react';

const Plane = ({ params }) => {
  const { model } = params;
  return (
    <>
      <div>{model}</div>
    </>
  );
};

export default Plane;
