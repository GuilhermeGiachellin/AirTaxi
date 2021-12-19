/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import useToggle from '../customHooks/useToggle';
import Avatar from '../plane/Avatar';
import styles from './gallery.module.scss';

const variants = {
  initial: (direction) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

const Gallery = ({ itemList }) => {
  const [item, setToggle] = useToggle(itemList);
  const [dir, setDir] = useState(1);

  const handleDir = (dir) => {
    setToggle(dir);
    setDir(dir);
  };

  return (
    <div className={styles.mainContainer}>
      <motion.button
        className={styles.roundedBtn}
        type="button"
        onClick={() => handleDir(-1)}
      >
        {' '}
        <BiLeftArrow style={{ color: 'white', fontSize: '1.5rem' }} />
        {' '}
      </motion.button>
      <div className={styles.header}>
        <h2> Availible planes </h2>
        <p> Please pick a model </p>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {' '}
          {'.'.repeat(15) }
          {' '}
        </p>
        <AnimatePresence exitBeforeEnter initial={false} custom={dir}>
          <motion.div
            className={styles.setContainer}
            key={item[0].id}
            custom={dir}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            {item.map((plane) => (
              <Avatar
                key={plane.id}
                details={plane}
              />
            ))}

          </motion.div>
        </AnimatePresence>
      </div>
      <motion.button
        className={styles.roundedBtn}
        style={{ rotate: '180deg' }}
        type="button"
        onClick={() => handleDir(1)}
      >
        {' '}
        <BiLeftArrow style={{ color: 'white', fontSize: '1.5rem' }} />
        {' '}
      </motion.button>
    </div>
  );
};

export default Gallery;
