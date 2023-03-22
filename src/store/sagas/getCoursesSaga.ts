/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
// import { EmptyObject } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
// import { PersistPartial } from 'redux-persist/es/persistReducer';
import {
  put, select,
  // delay,
} from 'redux-saga/effects';
import { Course } from '../../type/Courses';
// import { RootState } from '..';
// import { getAllCourses } from '../../api/courses';
// import { Course } from '../../type/Courses';
// import { BasketState } from '../features/Basket/basketSlice';
// import { ControlState } from '../features/Controls/controlsSlice';
import {
  selectToken,
  // CoursesState,
  setCourses,
  setError,
  setStatus,
} from '../features/Courses/coursesSlice';
// import { ProductsState } from '../features/Products/productsSlice';
// import { getAllProducts } from '../../api/products';
// import { Product } from '../../type/Product';
// import {
//   setError,
//   setStatus,
// } from '../features/Products/productsSlice';

export function* getCoursesSaga() {
  // eslint-disable-next-line no-console
  console.log('getCoursesSaga');
  const token: string = yield select(selectToken);

  // eslint-disable-next-line no-console
  console.log('getCoursesSaga', token);

  yield put(setStatus('loading'));

  try {
    // yield delay(3000);
    // const response: Product[] = yield getAllProducts();
    // const response: Course[] = yield getAllCourses(
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMGUwMDA3MS04YWZmLTQ3MDAtYmJmOS1iNmQ1ZjcyYTJiNzYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3ODg5MDQsImV4cCI6MTY3OTY4ODkwNH0.0hBEONuBcKkXZCVg0cw8JDJxHkyZzR2Dw5m6ouBwj3w',
    // );

    const res: { courses: Course[] } = yield fetch(
      'https://api.wisey.app/api/v1/core/preview-courses/', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Access-Control-Allow-Headers': 'Content-Type',
          // 'Access-Control-Allow-Origin': '*',
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
