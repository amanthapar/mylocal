import React, { Component } from 'react';
import NavBar from './NavBar';
import Categories from './Categories';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import Auth0Lock from 'auth0-lock';
import Login from './Login';


export default class App extends Component {

  // componentWillMount(){
  //   this.lock = new Auth0Lock('mcyPBpNmRzrXDb00r17Ywy9IDcDDbZ85', 'amanthapar.auth0.com', {});
  // }

  render() {
    // const childrenWithProps = React.Children.map(this.props.children,
    //   (child) => React.cloneElement(child, {
    //     lock: this.lock
    //   })
    // );

    return (
      <div>
        <NavBar />
        {this.props.children}
        <Categories />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}

// App.contextTypes = {
//   router: React.PropTypes.object.isRequired
// };