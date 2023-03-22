/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  put,
} from 'redux-saga/effects';
import {
  setError,
  setStatus,
  setToken,
} from '../features/Courses/coursesSlice';

export function* getTokenSaga() {
  // eslint-disable-next-line no-console
  console.log('getTokenSaga');

  yield put(setStatus('loading'));

  try {
    // yield delay(3000);
    // const response: Product[] = yield getAllProducts();
    // const response: string = yield getToken();

    const res: { token: string } = yield fetch(
      'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions', {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
        },
      },
    ).then(response => response.json());

    // eslint-disable-next-line no-console
    console.log('getTokenSaga response', res.token);

    yield put(setToken(res.token));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
