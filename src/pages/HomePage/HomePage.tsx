import { FunctionComponent } from 'react';
import styled from 'styled-components';

import {
  useAppSelector,
} from '../../store/hooks';

import { Loader } from '../../components/Loader';
import { TitleMessage } from '../../components/TitleMassage';
import {
  selectCourses,
  selectCoursesError,
  selectCoursesStatusLoading,
} from '../../store/features/Courses/coursesSlice';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const HomePage: FunctionComponent = () => {
  const isLoading = useAppSelector(selectCoursesStatusLoading) === 'loading';
  const error = useAppSelector(selectCoursesError);

  const courses = useAppSelector(selectCourses);

  if (error) {
    return <TitleMessage message={error} status="error" />;
  }

  return (
    <Wrapper>
      <h2>Courses:</h2>

      {isLoading && <Loader />}

      {courses.map(course => (
        <div key={course.id}>{course.title}</div>
      ))}
    </Wrapper>
  );
};
