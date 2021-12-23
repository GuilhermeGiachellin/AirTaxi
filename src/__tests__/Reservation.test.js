import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import Reservation from '../pages/Reservation';

describe('Test Reservation', () => {
  const viewRender = () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Reservation />
        </Provider>
        ,
      </BrowserRouter>,
    );
    return component;
  };

  let component;
  beforeEach(() => {
    component = viewRender();
  });

  test('Render reservation title', async () => {
    const { getByText } = component;
    expect(getByText('BOOK YOUR PLANE')).toBeInTheDocument();
  });

  test('Render reservation button 1', async () => {
    const { getByText } = component;
    expect(getByText('Reserved dates')).toBeInTheDocument();
  });

  test('Render reservation button 2', async () => {
    const { getByText } = component;
    expect(getByText('Book now')).toBeInTheDocument();
  });
});

describe('Snapshoot of the Reservation page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Reservation />
        </Provider>
        ,
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
