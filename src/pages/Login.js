import {
  AnimatePresence, AnimateSharedLayout, motion, useCycle,
} from 'framer-motion';
import React from 'react';
import LoginInForm from '../component/myForm/LogInForm';
import SignUpForm from '../component/myForm/SignUpForm';
import styles from './pages.module.scss';

const menuState = {
  intro: {
    goto: 'Already have an account?',
  },
  login: {
    goto: 'Create account!',
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
            <h1 style={{ fontFamily: 'Righteous', color: 'white', fontSize: '3rem' }}> AIR TAXI </h1>
          </motion.div>
          <AnimatePresence exitBeforeEnter>
            { toggle === 'login' && (
            <motion.div
              key={1}
              initial={{ opacity: 0, x: '-200px' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ scale: 0, x: '200px' }}
            >
              <LoginInForm />
            </motion.div>
            )}
            { toggle === 'signup' && (
            <motion.div
              key={2}
              initial={{ opacity: 0, x: '-200px' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ scale: 0, x: '200px' }}
            >
              <SignUpForm />
            </motion.div>
            )}
          </AnimatePresence>
          <motion.button className={styles.selectionBtn} type="button" onClick={() => setToggle()}>{menuState[toggle].goto}</motion.button>
        </motion.div>

      </AnimateSharedLayout>
    </section>
  );
};

export default Login;