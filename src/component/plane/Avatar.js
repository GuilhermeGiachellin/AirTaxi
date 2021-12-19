/* eslint-disable react/prop-types */
import React from 'react';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import planeImage from '../../assets/images/aircraft.jpg';

const Avatar = ({ details }) => (
  <div style={{ width: '250px', height: '250px' }}>
    <img style={{ width: 'inherit' }} src={planeImage} alt="plane" />
    <div style={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <h3>
        {' '}
        {details.model}
        {' '}
      </h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
        {' '}
        {'.'.repeat(15) }
        {' '}
      </p>
      <p style={{ textAlign: 'center' }}>
        {details.description}
      </p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <p>
          1
        </p>
        <p>
          2
        </p>
        <p>
          3
        </p>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        color: 'var(--second-font)',
        gap: '1rem',
        fontSize: '2rem',
      }}
      >
        <RiFacebookCircleLine />
        <TiSocialTwitterCircular />
        <RiInstagramLine />
      </div>
    </div>
  </div>
);

export default Avatar;
