/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';

export interface CoursesState {
  storage: any[];
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
    // loadCourses: () => {
    // we can create empty actions for saga watchers
    // but I use external sagasActions file
    // },
    setCourses: (state: CoursesState, action: PayloadAction<any[]>) => {
      state.storage = action.payload;
    },
    setStatus: (
      state: CoursesState,
      action: PayloadAction<'idle' | 'loading' | 'failed'>,
    ) => {
      state.statusLoading = action.payload;
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
    resetState: (state: CoursesState) => {
      return { ...state, ...initialState };
    },
  },
});

export default coursesSlice.reducer;
export const {
  setCourses,
  setStatus,
  setError,
  setToken,
  resetState,
} = coursesSlice.actions;

export const selectCourses = (state: RootState) => state.courses.storage;
export const selectCoursesStatusLoading
= (state: RootState) => state.courses.statusLoading;
export const selectCoursesError = (state: RootState) => state.courses.error;
export const selectToken = (state: RootState) => state.courses.token;
