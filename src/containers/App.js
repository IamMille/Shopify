import '../styles/App.css';
import logo from '../logo.svg';

import React from 'react';
import { connect } from 'react-redux';

import Shop from './Shop';
import Cart from './Cart';
import Login from './Login';
import History from './History';

import { appNavigate } from '../actions/appActions';


class App extends React.Component
{
  render() {
    let {app} = this.props;
    let views = ['Shop', 'Cart', 'History', 'Admin'];

    return <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My React Shop</h2>
        </div>

        <nav>
          { views.map( (location, index) => {
              let css = (location === app.location ? "navbtn active" : "navbtn" );
              return <button key={index}
                             className={css}
                             onClick={() => this.props.appNavigate({location})}
              >{location}</button>;
          })}
        </nav>

        <div className="flex-container">
            { app.location === "Shop" && <Shop /> }
            { app.location === "Cart"    && <Cart /> }
            { app.location === "History" && <History /> }
            { app.location === "Admin"   && <Login /> }
        </div>

    </div>;
  }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        appNavigate: (string) => {
            dispatch(appNavigate(string))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
