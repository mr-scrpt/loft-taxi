import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import auth from './Auth';
import roverPhotos, { sagas as roverSagas } from './Map';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({ auth, roverPhotos, form: formReducer });

export function* rootSaga() {
  yield fork(roverSagas);
}
