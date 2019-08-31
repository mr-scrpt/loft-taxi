import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';


import styles from './App.module.css';
import {connect} from 'react-redux';
import {getIsAuthorized, isLogged} from '../../modules/Auth';
import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';

import Header from '../Header';
import {PageLogin} from "../PageLogin";
import {PageMap} from '../PageMap';
import {PageProfile} from '../PageProfile';

import {getFormError} from "redux-form";


class App extends PureComponent {

  logged = () => {
    const {isLogged} = this.props;
    isLogged(true);
  };

  render() {
    const {isAuthorized, submitErrors} = this.props;
    return (
      <BrowserRouter>
        <Header/>
          <Redirect from='/' to={isAuthorized ? '/map' : '/login'} exact />
        <Switch>
          <Route
            path="/login"
            render={() => (
              <PageLogin onSends={this.logged}/>
            )}
            exact/>
          <PrivateRoute path="/map" component={PageMap} pathTo='/login' exact/>
          <PrivateRoute path="/profile" component={PageProfile} pathTo='/login' exact/>
          {/*Не работает редирект с левых роутов - перенаправляет на логин*/}
          <Route path='*' component={
            ()=><Redirect from='/' to={isAuthorized ? '/map' : '/login'} exact />
          } exact/>
        </Switch>
          {/*<Redirect from='*' to='/'/>*/}

        {/*{!isAuthorized && <Redirect to="/map"/>}
        {isAuthorized ? <PageMap /> : <PageLogin onSends={this.logged}/>}*/}
      </BrowserRouter>
    )
  }
}

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state),
    submitErrors: getFormError('Login')(state),
  }),
  {isLogged}
)(App);