import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setAuthorizationCookie = (cookieName, authToken) => {
  cookies.set(cookieName, authToken, { path: '/' });
};

const getAuthorizationCookie = (cookieName) => cookies.get(cookieName);

export { setAuthorizationCookie, getAuthorizationCookie };
