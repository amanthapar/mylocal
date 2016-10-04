import axios                                  from 'axios';
import { browserHistory }                     from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from '../constants';
import { SEARCH_TERMS }                       from '../constants';
import { EVENTBRITE_RESULTS }                 from '../constants';
import { YELP_RESULTS }                       from '../constants';
import { RESTAURANT }                         from '../constants'

// action submits email, pw to the server
// action creator > action > Dispatch > sent to all reducers
// we are using redux thunk, because it gives you access to Dispatch
// we are not using redux promise
// if success, update state of app to authenticated
// save jwt token
// redirect
// async function
export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post('/signin', { email, password })
    .then(response => {
      dispatch({ type: AUTH_USER, payload: 'welcome back!' });
      browserHistory.push('/');
      localStorage.setItem('token', response.data.token);
    })
    .catch(() => {
      dispatch(authError('Wrong login'));
    });
  };
};

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export function signoutUser() {
  localStorage.removeItem('token');
  return { type: UNAUTH_USER };
};

export function signupUser({ email, password, firstName, lastName, address }) {
  return function(dispatch) {
    axios.post('/signup', { email, password, firstName, lastName, address })
    .then(response =>{
      dispatch({ type: AUTH_USER, payload: firstName + ' ' + lastName});
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch(error => dispatch(authError(error.response.data.error)));
  };
};

export function submitQueryAndType (query, type) {
  return {
    type: SEARCH_TERMS,
    payload: {
      query: query,
      type: type
    }
  }
};

export function searchEventbrite (query, location) {
  const EVENTBRITE_API_KEY = "4JELE3WKM2XRYPGWNE7Q";
  const EVENTBRITE_URL = `https://www.eventbriteapi.com/v3/events/search/?token=${ EVENTBRITE_API_KEY }`;
  return function(dispatch) {
    browserHistory.push('/search/events');
    const url = `${ EVENTBRITE_URL }&q=${ query }&location.address=${ location }`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: EVENTBRITE_RESULTS,
        payload: response.data.events
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export function searchYelp (location) {
  const YELP_URL = '/search/restaurants';
  return function(dispatch) {
    browserHistory.push('/search/restaurants');
    const url = `${ YELP_URL }?location=${ location }&term=restaurant`;
    const request = axios.get(url)
    .then(response => {
      dispatch({
        type: YELP_RESULTS,
        payload: response.data.businesses
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
};

export function fetchRestaurant(id) {
  return function(dispatch) {
    axios.get(`/fetchRestaurant/${id}`)
    .then(response => {
      dispatch({
        type: RESTAURANT,
        payload: response.data
       })
    })
    .catch((error) => {
      console.log(error);
    });
  }
};