/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  delay,
  put, select,
} from 'redux-saga/effects';
import { getCourse } from '../../api/getCourse';
import { CourseDetailed } from '../../type/Courses';

import {
  // resetStateExceptToken,
  selectToken,
  setDetailed,
  // setCourses,
  setError,
  setStatus,
} from '../features/Courses/coursesSlice';

type Params = { type: string; payload: string };

export function* getCourseSaga({ payload }: Params) {
  // eslint-disable-next-line no-console
  console.log('getCourseSaga start');
  const token: string = yield select(selectToken);

  if (!token) {
    // eslint-disable-next-line no-console
    yield console.log('getCourseSaga: token === null');
  }

  // yield put(resetStateExceptToken());
  yield put(setStatus('loading'));

  try {
    yield delay(3000);

    const res: CourseDetailed = yield getCourse(token, payload);

    // eslint-disable-next-line no-console
    yield console.log('getCourseSaga response', res);

    yield put(setDetailed(res));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message)); // not axios error type
  } finally {
    yield put(setStatus('idle'));
  }
}
