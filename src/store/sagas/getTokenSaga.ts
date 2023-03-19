/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  put,
  // delay,
} from 'redux-saga/effects';
import { getToken } from '../../api/token';
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
    const response: string = yield getToken();

    // eslint-disable-next-line no-console
    yield console.log('response', response);

    yield put(setToken(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
