import React from 'react';
import App from './components/App';
import Hero from './components/Hero';
import Location from './components/Location';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Login from './components/Login';




export default (
  <Route path="/" component={App}>
    <IndexRoute component={Hero} />
    <Route path ="/search" component={Location} />
    <Route path='/login' component={Login} />
    <Route path="/login#access_token=:token" component={Login} />
  </Route>
);