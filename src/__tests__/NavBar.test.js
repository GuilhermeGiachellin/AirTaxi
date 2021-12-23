import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
import NavBar from '../component/nav/navBar';

describe('Test MainView', () => {
  const viewRender = () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>,
    );
    return component;
  };

  let component;
  beforeEach(() => {
    component = viewRender();
  });

  test('Render Nav title', async () => {
    const { getByText } = component;
    expect(getByText('AIR TAXI')).toBeInTheDocument();
  });

  test('Render Nav Planes', async () => {
    const { getByText } = component;
    expect(getByText('PLANES')).toBeInTheDocument();
  });

  test('Render Nav Add Planes', async () => {
    const { getByText } = component;
    expect(getByText('ADD PLANE')).toBeInTheDocument();
  });

  test('Render Nav SignOut', async () => {
    const { getByText } = component;
    expect(getByText('SIGN OUT')).toBeInTheDocument();
  });
});
