/* eslint-disable import/no-cycle */
import {
  takeLeading,
  takeEvery,
} from 'redux-saga/effects';
// import { sendOrderToServer } from '../features/Basket/basketSlice';
// import { loadProducts } from '../features/Products/productsSlice';
import { getCoursesSaga } from './getCoursesSaga';
import { getTokenSaga } from './getTokenSaga';
import { sagaActions } from './sagaActions';
import { sendOrderSaga } from './sendOrderSaga';

export function* watchSaga() {
  // eslint-disable-next-line no-console
  console.log('watchSaga');

  yield takeLeading(sagaActions.FETCH_TOKEN, getTokenSaga);
  // send only first response
  // but we can add pagination for each response
  yield takeEvery(sagaActions.FETCH_COURSES, getCoursesSaga);

  // run sendOrder every time
  yield takeEvery(sagaActions.FETCH_ORDER_TO_SERVER, sendOrderSaga);
}
