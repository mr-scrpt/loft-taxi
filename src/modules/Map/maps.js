// Реализуйте редьюсер

import {handleActions} from 'redux-actions';
import {fetchAddressSuccess, fetchAddressRequest} from './actions';
import {createSelector} from 'reselect';

const AddressList = handleActions({
  [fetchAddressRequest]: ()=> null,
  [fetchAddressSuccess]: (_state, action) => action.payload
}, null);

export default AddressList;

export const getAddressList = createSelector(
  state => state,
  addressList=> addressList
);
