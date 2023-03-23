/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  delay,
  put, select,
} from 'redux-saga/effects';
import { getCourse } from '../../api/getCourse';
import { Course } from '../../type/Courses';

import {
  // resetStateExceptToken,
  selectToken,
  setCourses,
  setError,
  setStatus,
} from '../features/Courses/coursesSlice';

export function* getCourseSaga(courseId: string) {
  // eslint-disable-next-line no-console
  console.log('getCoursesSaga start');
  const token: string = yield select(selectToken);

  if (!token) {
    // eslint-disable-next-line no-console
    yield console.log('getCoursesSaga: token === null');
  }

  // yield put(resetStateExceptToken());
  yield put(setStatus('loading'));

  try {
    yield delay(3000);

    const res: { courses: Course[] } = yield getCourse(token, courseId);

    // eslint-disable-next-line no-console
    yield console.log('response', res.courses);

    yield put(setCourses(res.courses));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
