import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from '../Login';
import Map from '../Map';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { getIsAuthorized, isLogged } from '../../modules/Auth';
import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom';
import Header from '../Header';
import {PageLogin} from "../PageLogin";
import {PageMap} from '../PageMap';
import {getFormError} from "redux-form";



class App extends PureComponent {
  
  handleLogin = apiKey => {
    // const { addKey } = this.props;
    // addKey(apiKey);
    console.log('test here');
  };

  logged = ()=>{
    const {isLogged} = this.props;
    isLogged(true);
    console.log('logged');

  };


  render() {
    const { isAuthorized, submitErrors } = this.props;
    console.log(submitErrors);
    return(
      <BrowserRouter>
        <Header />
        {isAuthorized ? <PageMap /> : <PageLogin onSends={this.logged}/>}
      </BrowserRouter>
    )
  }

  /*  render() {
      const { isAuthorized } = this.props;
      return isAuthorized ? this.renderApp() : this.renderLogin();
    }

    renderApp() {
      return <Map />;
    }

    renderLogin() {
      return (
        <Grid alignItems="center" className={styles.root} direction="column" justify="space-between" container>
          <Login onEnter={this.handleEnterApiKey} />
        </Grid>
      );
    }*/
}

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state),
    submitErrors: getFormError('Login')(state),
  }),

  { isLogged }
)(App);
