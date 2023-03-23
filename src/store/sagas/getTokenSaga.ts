/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  // delay,
  put,
} from 'redux-saga/effects';
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

    const response: { token: string } = yield fetch(
      'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
        },
      },
    ).then(r => r.json());

    // eslint-disable-next-line no-console
    console.log('getTokenSaga response', response.token);

    yield put(setToken(response.token));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
