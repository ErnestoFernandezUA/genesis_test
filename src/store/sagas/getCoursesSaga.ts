/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  call,
  delay,
  put, select,
} from 'redux-saga/effects';
import { getCourses } from '../../api/getCourses';

import {
  resetStateExceptToken,
  selectToken,
  setCourses,
  setError,
  setStatus,
} from '../features/Courses/coursesSlice';

export function* getCoursesSaga() {
  // eslint-disable-next-line no-console
  console.log('getCoursesSaga start');
  const token: string = yield select(selectToken);

  if (!token) {
    // eslint-disable-next-line no-console
    yield console.log('getCoursesSaga: token === null');
  }

  yield put(resetStateExceptToken());
  yield put(setStatus('loading'));

  try {
    yield delay(3000);

    const { courses } = yield call(getCourses, token);

    // eslint-disable-next-line no-console
    yield console.log('courses', courses);

    yield put(setCourses(courses));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
