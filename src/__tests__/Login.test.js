import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import Login from '../pages/Login';

describe('Test Renders', () => {
  test('Render login title', async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(screen.getByText(/AIR TAXI/i)).toBeInTheDocument();
  });
});

describe('Snapshoot of the Login page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(

      <Provider store={store}>
        <Login />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
