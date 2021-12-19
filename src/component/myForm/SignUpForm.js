import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { motion } from 'framer-motion';
import { signUp } from '../../redux/slices/sessionSlice';
import { SignUpSchema } from '../lib/schema';
import styles from './form.module.scss';

const templates = {
  loading: {
    scaleX: [0.8, 1, 1.2],
    borderRadius: [50, 25, 50],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.sessions);
  return (
    <section className={styles.mainContainer}>
      <Formik
        initialValues={{
          name: '', email: '', password: '', passwordConfirmation: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            dispatch(signUp(values));
            navigate('/main');
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.myForm}>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <Field type="password" name="passwordConfirmation" placeholder="Password Confirmation" />
            <ErrorMessage name="passwordConfirmation" component="div" />
            <motion.button
              type="submit"
              animate={status === 'loading' ? templates.loading : ''}
              disabled={status === 'loading' ? true : isSubmitting}
            >
              {status === 'loading' ? 'Loading' : 'Sign Up'}
            </motion.button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default SignUpForm;
