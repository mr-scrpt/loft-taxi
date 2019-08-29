import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from '../Login';
import Map from '../Map';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { getIsAuthorized, addKey } from '../../modules/Auth';
import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom';
import Header from '../Header';
import {PageLogin} from "../PageLogin";
import {PageMap} from '../PageMap';



class App extends PureComponent {
  handleEnterApiKey = apiKey => {
    const { addKey } = this.props;

    addKey(apiKey);
  };



  render() {
    const { isAuthorized } = this.props;
    return(
      <BrowserRouter>
        <Header />
        {isAuthorized ? <PageMap /> : <PageLogin />}
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
  state => ({ isAuthorized: getIsAuthorized(state) }),
  { addKey }
)(App);
