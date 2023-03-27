/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';
import { Course, CourseDetailed } from '../../../type/Courses';

export interface CoursesState {
  storage: Course[];
  token: string | null;
  statusLoading: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: CoursesState = {
  storage: [],
  token: null,
  statusLoading: 'idle',
  error: null,
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state: CoursesState, action: PayloadAction<Course[]>) => {
      // eslint-disable-next-line no-console
      console.log('setCourses');

      state.storage = [...action.payload.map(c => ({ ...c, detailed: null }))];
    },
    setDetailed: (
      state: CoursesState,
      action: PayloadAction<CourseDetailed>,
    ) => {
      // eslint-disable-next-line no-console
      console.log('setDetailed');

      state.storage = [...state.storage.map(c => {
        if (c.id === action.payload.id) {
          return {
            ...c,
            detailed: action.payload,
          };
        }

        return c;
      })];
    },
    setStatus: (
      state: CoursesState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
    },
    resetError: (state: CoursesState) => {
      state.error = initialState.error;
    },
    setError: (state: CoursesState, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.statusLoading = 'failed';
    },
    setToken: (state: CoursesState, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-console
      console.log('setToken');

      state.token = action.payload;
    },
    resetStateExceptToken: (state: CoursesState) => {
      return { ...state, ...initialState, token: state.token };
    },
    resetState: (state: CoursesState) => {
      return { ...state, ...initialState };
    },
  },
});

export default coursesSlice.reducer;
export const {
  setCourses,
  setDetailed,
  setStatus,
  resetError,
  setError,
  setToken,
  resetStateExceptToken,
  resetState,
} = coursesSlice.actions;

export const selectCourses = (state: RootState) => state.courses.storage;
export const selectCoursesStatusLoading
= (state: RootState) => state.courses.statusLoading;
export const selectCoursesError = (state: RootState) => state.courses.error;
export const selectToken = (state: RootState) => state.courses.token;
