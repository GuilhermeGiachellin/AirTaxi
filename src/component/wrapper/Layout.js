/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
// import styles from './layoutStyle.module.scss';

const animCollection = {
  swipeIn: {
    initial: { opacity: 0, x: -200, y: 0 },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0 },
  },
  fadeIn: {
    initial: { opacity: 0, scale: 1 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.25,
      },
    },
    exit: { opacity: 0 },
  },
  // fallIn: {
  //   initial: { y: -100, opacity: 0 },
  //   animate: { y: 0, opacity: 1 },
  //   exit: { y: 50, opacity: 0 },
  // },
};

const Layout = ({ children, preAnimation }) => (
  <>
    <motion.main
      // className={styles.mainContainer}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animCollection[preAnimation]}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.main>
  </>
);
export default Layout;
