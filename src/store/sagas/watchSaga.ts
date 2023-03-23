/* eslint-disable import/no-cycle */
import {
  takeLeading,
  takeEvery,
  select,
} from 'redux-saga/effects';
import { Course } from '../../type/Courses';
import { selectCourses, selectToken } from '../features/Courses/coursesSlice';
import { getCoursesSaga } from './getCoursesSaga';
import { getTokenSaga } from './getTokenSaga';
import { sagaActions } from './sagaActions';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');
  const token: string = yield select(selectToken);
  const courses: Course[] = yield select(selectCourses);

  // eslint-disable-next-line no-console
  console.log('watchSaga', token, courses);

  if (!token) {
    yield takeLeading(sagaActions.FETCH_TOKEN, getTokenSaga);
  }

  if (!courses.length) {
    yield takeEvery(sagaActions.FETCH_COURSES, getCoursesSaga);
  }
}
