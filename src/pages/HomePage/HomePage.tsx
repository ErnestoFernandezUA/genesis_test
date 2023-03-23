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
import { Title } from '../../UI/Title';
import { Grid } from '../../UI/Grid';
import { CourseCard } from '../../components/CourseCard';

const Wrapper = styled.div`
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
      <Title>Courses:</Title>

      {isLoading && <Loader />}

      <Grid>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </Grid>
    </Wrapper>
  );
};
