/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import { createPlane } from '../../redux/slices/planesSlice';
// import style from '../../assets/Forms.module.css';

const CreatePlaneForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        model: '', registration: '', cruise_speed: '', tour_price: '', description: '', image: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          dispatch(createPlane(values));
          navigate('/main');
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="model" placeholder="Model" />
          <ErrorMessage name="model" component="div" />
          <Field type="text" name="registration" placeholder="Registration" />
          <ErrorMessage name="registration" component="div" />
          <Field type="text" name="cruise_speed" placeholder="Cruise speed" />
          <ErrorMessage name="cruise_speed" component="div" />
          <Field type="text" name="tour_price" placeholder="Tour Price" />
          <ErrorMessage name="tour_price" component="div" />
          <Field type="text" name="description" placeholder="Plane description" />
          <ErrorMessage name="description" component="div" />
          <Field type="text" name="image" placeholder="Image url" />
          <ErrorMessage name="image" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Add plane
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePlaneForm;
