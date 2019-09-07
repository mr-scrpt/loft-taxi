import { createAction } from 'redux-actions';

export const fetchAddressRequest = createAction(
  'TAXI/FETCH_ADDRESS_REQUEST'
);
export const fetchAddressSuccess = createAction(
  'TAXI/FETCH_ADDRESS_SUCCESS'
);


export const fetchCoordsRequest = createAction(
  'TAXI/FETCH_COORDS_REQUEST'
);
export const fetchCoordsSuccess = createAction(
  'TAXI/FETCH_COORDS_SUCCESS'
);


export const cancelPathRequest = createAction(
  'TAXI/CANCEL_PATH_REQUEST'
);

