import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth, {sagasAuth} from './Auth';
import maps, {sagasMap} from './Map'
import profile from './Profile';

import {reducer as formReducer} from 'redux-form';


export default combineReducers({ auth, maps, profile, form: formReducer });

export function* rootSaga() {
  yield fork(sagasAuth);
  yield fork(sagasMap);
}
