/* eslint-disable import/no-cycle */
import {
  takeLeading,
  takeEvery,
} from 'redux-saga/effects';
import { getCoursesSaga } from './getCoursesSaga';
import { getTokenSaga } from './getTokenSaga';
import { sagaActions } from './sagaActions';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');

  yield takeLeading(sagaActions.FETCH_TOKEN, getTokenSaga);
  yield takeEvery(sagaActions.FETCH_COURSES, getCoursesSaga);
}
