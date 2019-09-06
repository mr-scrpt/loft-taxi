// Реализуйте редьюсер

import {handleActions} from 'redux-actions';
import {
  fetchAddressSuccess,
  fetchAddressRequest,
  fetchCoordsSuccess,
  fetchCoordsRequest,
  cancelPathRequest
} from './actions';
import {createSelector} from 'reselect';
import {combineReducers} from "redux";

const addressList = handleActions({
  [fetchAddressRequest]: () => null,
  [fetchAddressSuccess]: (_state, action) => action.payload
}, null);

const addressCoords = handleActions({
  [fetchCoordsRequest]: () => [],
  [fetchCoordsSuccess]: (_state, action) => action.payload
}, []);

const onMyWay = handleActions({
  [cancelPathRequest]: () => false,
  [fetchCoordsSuccess]: () => true
}, 'loaded');

export default combineReducers({
  addressList,
  addressCoords,
  onMyWay
});

export const getAddressList = createSelector(
  state => state.maps.addressList,
  addressList => addressList
);

export const getCoordsWay = createSelector(
  state => state.maps.addressCoords,
  coords => coords
);

export const getOnMyWay = createSelector(
  state=> state.maps.onMyWay,
  onMyWay => onMyWay
);
