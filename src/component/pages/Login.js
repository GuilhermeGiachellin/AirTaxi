import {
  AnimatePresence, AnimateSharedLayout, motion, useCycle,
} from 'framer-motion';
import React from 'react';
import LogInForm from '../myForm/LogInForm';
import SignUpForm from '../myForm/SignUpForm';
import styles from './pages.module.scss';

const menuState = {
  intro: {
    goto: 'Login',
  },
  login: {
    goto: 'Signup',
  },
  signup: {
    goto: 'Back',
  },
};

const Login = () => {
  const [toggle, setToggle] = useCycle('intro', 'login', 'signup');
  return (
    <section
      className={styles.loginMainContainer}
      style={{
        display: 'flex', placeContent: 'center', flexDirection: 'column', width: '100%', alignItems: 'center',
      }}
    >
      <AnimateSharedLayout>
        <motion.div
          style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
          }}
          layout
        >
          <motion.div layout>
            <h1> HELO HELO HELO I AM A TITLE </h1>
          </motion.div>
          <AnimatePresence exitBeforeEnter>
            { toggle === 'login' && (
            <motion.div
              key={1}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <LogInForm />
            </motion.div>
            )}
            { toggle === 'signup' && (
            <motion.div
              key={2}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <SignUpForm />
            </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.button className={styles.selectionBtn} type="button" onClick={() => setToggle()}>{menuState[toggle].goto}</motion.button>
      </AnimateSharedLayout>
    </section>
  );
};

export default Login;
