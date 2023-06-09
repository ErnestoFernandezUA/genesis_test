/* eslint-disable max-len */
import { useEffect } from 'react';
import { createHashRouter, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { Controls } from './components/Controls';
import { selectCourses, selectToken } from './store/features/Courses/coursesSlice';
import {
  useAppDispatch,
  useAppSelector,
} from './store/hooks';
import { fetchCourses, fetchToken } from './store/sagas/sagaActions';
import { CoursePage } from './pages/CoursePage';

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  `;

const Header = styled.header`
  max-width: 1270px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 1rem;
  padding-top: 1rem;
`;

const Main = styled.main`
  max-width: 1270px;
  margin: 0 auto;
`;

// localStorage.clear();

function App() {
  const token = useAppSelector(selectToken);
  const courses = useAppSelector(selectCourses);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchToken());
  }, []);

  useEffect(() => {
    if (token && !courses.length) {
      dispatch(fetchCourses());
    }
  }, [token]);

  return (
    <Wrapper>
      <Header>
        <h1>Test</h1>
        <Controls />
      </Header>

      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
}

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    id: 'root',
    children: [
      {
        path: '/',
        element: <HomePage />,
        id: 'homePage',
        errorElement: <>Error on HomePage</>,
      },
      {
        path: '/course/:id',
        element: <CoursePage />,
        errorElement: <>Error on CoursePage</>,
      },
    ],
  },
]);
