/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  delay,
  put, select,
} from 'redux-saga/effects';
import { Course } from '../../type/Courses';

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

    const res: { courses: Course[] } = yield fetch(
      'https://api.wisey.app/api/v1/core/preview-courses/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
        },
      },
    ).then(response => response.json());

    // eslint-disable-next-line no-console
    yield console.log('response', res.courses);

    yield put(setCourses(res.courses));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
