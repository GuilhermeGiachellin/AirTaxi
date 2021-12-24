import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from './popup.module.scss';

const PopUp = ({ handleInput, message, skip }) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
      <motion.div
        className={styles.mainContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className={styles.options}
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h3>{message}</h3>
          {skip && (
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              handleInput();
            }}
          >
            Close
          </button>
          )}
        </motion.div>
      </motion.div>
      )}
    </>
  );
};

export default PopUp;
