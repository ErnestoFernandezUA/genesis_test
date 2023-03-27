import { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  useAppDispatch,
  useAppSelector,
} from '../../store/hooks';
import { selectCourses } from '../../store/features/Courses/coursesSlice';
import { CourseCard } from '../../components/CourseCard';
import { fetchCourse } from '../../store/sagas/sagaActions';

const Wrapper = styled.div`
  margin: 0 auto;
  grid-template-columns: repeat(4, minmax(400px, 1fr));
  gap: 20px;
  margin: 0 auto;
  padding: 20px;
`;

export const CoursePage: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const courses = useAppSelector(selectCourses);
  const course = courses.find(c => String(c.id) === id);

  useEffect(() => {
    if (id && !course?.detailed) {
      dispatch(fetchCourse(id));
    }
  }, []);

  return (
    <Wrapper>
      {course && <CourseCard course={course} format="page" />}
    </Wrapper>
  );
};
