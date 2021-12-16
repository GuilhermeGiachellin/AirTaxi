/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { isValue } from 'react-calendar/dist/umd/shared/propTypes';
import { signUp } from '../../redux/slices/sessionSlice';
import style from '../../assets/Forms.module.css';
import { SignUpSchema } from '../lib/schema';

const SigUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: '', email: '', password: '', passwordConfirmation: '',
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(signUp(values));
          navigate('/');
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" />
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <Field type="password" name="passwordConfirmation" placeholder="Password Confirmation" />
          <ErrorMessage name="passwordConfirmation" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SigUpForm;
