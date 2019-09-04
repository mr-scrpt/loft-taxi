import {fork, takeEvery, put, call} from 'redux-saga/effects';
import {fetchAddressRequest, fetchAddressSuccess, fetchCoordsRequest, fetchCoordsSuccess} from './actions';
import {getAddressList, getCoordsPoint} from './api';


function* fetchWatcher() {
  yield takeEvery(fetchAddressRequest, getAddress);
  yield takeEvery(fetchCoordsRequest, getCoords);

}


export function* getAddress() {
  const res = yield getAddressList();
  yield put(fetchAddressSuccess(res));
}


export function* getCoords(action) {
  const {from, to} = action.payload;
  const coords = yield call(getCoordsPoint, from, to);
  if(coords){
    yield put(fetchCoordsSuccess(coords));
  }
  
}

export default function* () {
  yield fork(fetchWatcher)
};