import { useDispatch } from 'react-redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { logIn } from '../../redux/slices/sessionSlice';
import { SignInSchema } from '../lib/schema';
import styles from './form.module.scss';

const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          email: '', password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            dispatch(logIn(values));
            navigate('/main');
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.myForm}>
            <Field type="email" name="email" placeholder="Email" autoComplete="off" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Sign In
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LogInForm;
