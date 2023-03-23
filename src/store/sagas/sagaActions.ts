export const sagaActions = {
  FETCH_PRODUCTS_DATA: 'saga/FETCH_PRODUCTS_DATA',
  FETCH_ORDER_TO_SERVER: 'saga/FETCH_ORDER_TO_SERVER',
  FETCH_TOKEN: 'saga/FETCH_TOKEN',
  FETCH_COURSES: 'saga/FETCH_COURSES',
  FETCH_COURSE: 'saga/FETCH_COURSE',
};

const sagaActionsCreator = {
  loadProducts: () => ({ type: sagaActions.FETCH_PRODUCTS_DATA }),
  sendOrder: () => ({ type: sagaActions.FETCH_ORDER_TO_SERVER }),
  fetchToken: () => ({ type: sagaActions.FETCH_TOKEN }),
  fetchCourses: () => ({ type: sagaActions.FETCH_COURSES }),
  fetchCourse: (courseId: string) => ({
    type: sagaActions.FETCH_COURSE,
    action: { payload: courseId },
  }),
};

export const {
  loadProducts,
  sendOrder,
  fetchToken,
  fetchCourses,
  fetchCourse,
} = sagaActionsCreator;
