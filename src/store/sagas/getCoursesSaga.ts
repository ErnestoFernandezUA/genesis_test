/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { AxiosError } from 'axios';
import {
  put,
  // delay,
} from 'redux-saga/effects';
import { getAllCourses } from '../../api/courses';
import { Course } from '../../type/Courses';
import {
  setCourses,
  setError,
  setStatus,
} from '../features/Courses/coursesSlice';
// import { getAllProducts } from '../../api/products';
// import { Product } from '../../type/Product';
// import {
//   setError,
//   setStatus,
// } from '../features/Products/productsSlice';

export function* getCoursesSaga() {
  // eslint-disable-next-line no-console
  console.log('getCoursesSaga');
  yield put(setStatus('loading'));

  try {
    // yield delay(3000);
    // const response: Product[] = yield getAllProducts();
    const response: Course[] = yield getAllCourses(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMGUwMDA3MS04YWZmLTQ3MDAtYmJmOS1iNmQ1ZjcyYTJiNzYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3ODg5MDQsImV4cCI6MTY3OTY4ODkwNH0.0hBEONuBcKkXZCVg0cw8JDJxHkyZzR2Dw5m6ouBwj3w',
    );

    // eslint-disable-next-line no-console
    yield console.log('response', response);

    yield put(setCourses(response));
  } catch (error: unknown) {
    yield put(setError((error as AxiosError).message));
  } finally {
    yield put(setStatus('idle'));
  }
}
