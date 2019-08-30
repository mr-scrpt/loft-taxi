// Реализуйте редьюсер
import { combineReducers } from 'redux';
import {handleActions} from 'redux-actions';
import {isLogged} from './actions';
import {createSelector} from 'reselect';

const Logged = handleActions({
  [isLogged]: (_state, action) => action.payload
}, false);


export default combineReducers({
  Logged
});
//Селекторы

export const getIsAuthorized = createSelector(
  state => state.auth.Logged,
  apiKey=>apiKey
);