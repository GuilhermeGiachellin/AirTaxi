import React, { useEffect } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanes, selectAllPlanes } from '../../redux/slices/planesSlice';
import Gallery from '../gallery/Gallery';

const PlaneManager = () => {
  const dispatch = useDispatch();
  const entities = useSelector((state) => selectAllPlanes(state));

  useEffect(() => {
    dispatch(fetchPlanes());
  }, [dispatch]);

  const groupIn = (n, list) => list.reduce((r, e, i) => (i % n ? r[r.length - 1]
    .push(e) : r.push([e])) && r,
  []);

  return (
    <>
      {entities.length > 0 && (
        <Media queries={{ small: { maxWidth: 420 } }}>
          {(matches) => (matches.small
            ? (<Gallery itemList={groupIn(1, entities)} />)
            : (<Gallery itemList={groupIn(3, entities)} />)
          )}
        </Media>
      )}
    </>
  );
};

export default PlaneManager;
