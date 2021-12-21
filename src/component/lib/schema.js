import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email(),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is to short - should be 6 char minimun'),
});

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email(),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is to short - should be 6 char minimun'),
  passwordConfirmation: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is to short - should be 6 char minimun'),
});

const CreatePlaneSchema = Yup.object().shape({
  model: Yup.string().required('Model is required'),
  registration: Yup.number().required('Plane registration is required'),
  description: Yup.string().required('Description is required'),
  cruise_speed: Yup.number().required('Cruise speed is required'),
  tour_price: Yup.number().required('Price is required'),
  picture: Yup.string().url().required('Image is required'),
});

export { SignInSchema, SignUpSchema, CreatePlaneSchema };
