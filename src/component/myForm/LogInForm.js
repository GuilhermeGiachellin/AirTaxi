/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { AnimateSharedLayout, motion, useCycle } from 'framer-motion';
import { logIn } from '../../redux/slices/sessionSlice';
import { SignInSchema } from '../lib/schema';
import style from '../../assets/Forms.module.css';

const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useCycle(false, true);

  return (
    <>
      <button type="button" onClick={() => setToggle()}>Click me</button>
      <AnimateSharedLayout>
        <motion.div layout>
          {toggle && (
            <motion.div animate={{ scale: 2 }}>
              HELOHELO
            </motion.div>
          )}
          <motion.div>
            BYE BYE
          </motion.div>
        </motion.div>

      </AnimateSharedLayout>
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
          <Form>
            <Field type="email" name="email" placeholder="Email" />
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
