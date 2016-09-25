import React from 'react';
import Auth0Lock from 'auth0-lock';
import browserHistory from 'react-router';

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.lock = new Auth0Lock('mcyPBpNmRzrXDb00r17Ywy9IDcDDbZ85', 'amanthapar.auth0.com', {});
    this.lock.on('authenticated', this.doAuthentication.bind(this));
    this.lock.on('authorization_error', this.authorizationError.bind(this));
    this.login = this.login.bind(this);
  }

  login() {
    this.lock.show();
    this.lock.on('authenticated', function(authHash){
    var authHash = this.lock.parseHash(window.location.hash);
    console.log(authHash);
    });
  }

  doAuthentication(authResult) {
    console.log(authResult);
    var authHash = this.lock.parseHash(window.location.hash);
    console.log(authHash);
    // If there is no JWT in local storage and there is one in the URL hash,
    // save it in local storage
    if (!idToken && authHash) {
      if (authHash.id_token) {
        idToken = authHash.id_token;
        localStorage.setItem('id_token', authHash.id_token);
    // browserHistory.push('/search');
    this.setToken(authResult.idToken);
    // navigate to the home route
      }
    }
  }
  authorizationError(error){
    // Unexpected authentication error
    console.log('Authentication Error', error)
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
  }


  render() {
    return (
      <div className="login-box" onClick={this.login()}>
      </div>
    );
  }
}