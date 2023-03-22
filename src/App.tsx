/* eslint-disable max-len */
import { useEffect } from 'react';
import { createHashRouter, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { Controls } from './components/Controls';
import { BasketPage } from './pages/BasketPage';
import { ProductPage } from './pages/ProductPage';
import { selectToken, setCourses } from './store/features/Courses/coursesSlice';
import {
  useAppDispatch,
  useAppSelector,
} from './store/hooks';
import { fetchToken } from './store/sagas/sagaActions';

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

function App() {
  const token = useAppSelector(selectToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchToken());

    const load = async () => {
      const res = await fetch(
        'https://api.wisey.app/api/v1/core/preview-courses/', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMGUwMDA3MS04YWZmLTQ3MDAtYmJmOS1iNmQ1ZjcyYTJiNzYiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3ODg5MDQsImV4cCI6MTY3OTY4ODkwNH0.0hBEONuBcKkXZCVg0cw8JDJxHkyZzR2Dw5m6ouBwj3w',
            // 'Access-Control-Allow-Headers': 'Content-Type',
            // 'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Authorization',
          },
        },
      );

      const response = await res.json();

      dispatch(setCourses(response.courses));
    };

    load();
  }, []);

  // eslint-disable-next-line no-console
  console.log('token', token);

  return (
    <Wrapper>
      <Header>
        <h1>Test</h1>
        {token}
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
        path: '/basket',
        element: <BasketPage />,
        id: 'basketPage',
        errorElement: <>Error on BasketPage</>,
      },
      // there we can add page for each product
      {
        path: '/product/:id',
        element: <ProductPage />,
        errorElement: <>Error on ProductPage</>,
      },
    ],
  },
]);
