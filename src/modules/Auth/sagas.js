import {takeLatest, select, fork, takeEvery, call, put} from 'redux-saga/effects';
import {fetchLoggedRequest, fetchLoggedSuccess} from './actions';
import {getIsAuthorized} from './api';


function* fetchWatcher() {
  yield takeEvery(fetchLoggedRequest, checkAutorized);

}

export function* checkAutorized() {
  const state = yield select();
  const {login, password} = state.form.Login.values;
  const autorized = yield call(getIsAuthorized, login, password);
  const {success} = autorized;
  yield put(fetchLoggedSuccess(success));
}

export default function*() {
  yield fork(fetchWatcher);
}