import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getIsAuthorized, fetchLoggedRequest} from '../../modules/Auth';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Header from '../Header';
import {PageLogin} from "../PageLogin";
import {PageMap} from '../PageMap';
import {PageProfile} from '../PageProfile';
import {getFormError} from "redux-form";


class App extends PureComponent {

  logged = () => {
    const {fetchLoggedRequest} = this.props;
    fetchLoggedRequest();
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
          <Route path='*' component={
            ()=><Redirect from='/' to={isAuthorized ? '/map' : '/login'} exact />
          } exact/>
        </Switch>

      </BrowserRouter>
    )
  }
}

export default connect(
  state => ({
    isAuthorized: getIsAuthorized(state),
    submitErrors: getFormError('Login')(state),
  }),
  {fetchLoggedRequest}
)(App);