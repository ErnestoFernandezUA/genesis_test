import { Course } from '../type/Courses';

export const getCourse = async (token: string, courseId: string) => {
  const response: { courses: Course[] } = await fetch(
    `https://api.wisey.app/api/v1/core/preview-courses/${courseId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Headers':
          'X-Requested-With, Content-Type, Authorization',
        'Access-Control-Allow-Origin': 'Origin',
      },
    },
  ).then(r => r.json());

  return response;
};
