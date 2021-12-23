import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { motion } from 'framer-motion';
import { logIn } from '../../redux/slices/sessionSlice';
import { SignInSchema } from '../lib/schema';
import styles from './form.module.scss';

const templates = {
  loading: {
    scaleX: [1, 1.2],
    borderRadius: [50, 25, 50],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.sessions);

  useEffect(() => {
    if (status === 'logged') {
      navigate('/main');
    }
  }, [status]);

  return (
    <section className={styles.mainContainer}>
      <Formik
        initialValues={{
          email: '', password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
          await dispatch(logIn(values));
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.myForm}>
            <Field type="email" name="email" placeholder="Email" autoComplete="off" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <motion.button
              type="submit"
              animate={status === 'loading' ? templates.loading : ''}
              disabled={status === 'loading' ? true : isSubmitting}
            >
              {status === 'loading' ? 'Loading' : 'Log in'}
            </motion.button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default LogInForm;
