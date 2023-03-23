/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  // delay,
  put,
} from 'redux-saga/effects';
import { getToken } from '../../api/getToken';
import {
  resetError,
  setError,
  setStatus,
  setToken,
} from '../features/Courses/coursesSlice';

export function* getTokenSaga() {
  // eslint-disable-next-line no-console
  console.log('getTokenSaga start');

  yield put(resetError());
  yield put(setStatus('loading'));

  try {
    // yield delay(3000);

    const { token } = yield getToken();

    // eslint-disable-next-line no-console
    console.log('getTokenSaga response', token);

    yield put(setToken(token));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
