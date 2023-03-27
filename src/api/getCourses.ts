import { Course } from '../type/Courses';

export const getCourses = async (token: string) => {
  const response: { courses: Course[] } = await fetch(
    'https://api.wisey.app/api/v1/core/preview-courses/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Access-Control-Allow-Headers':
          'X-Requested-With, Content-Type, Authorization',
        'Access-Control-Allow-Methods':
          'GET,POST,PUT,DELETE,OPTIONS',
        'Access-Control-Allow-Origin':
          'https://ernestofernandezua.github.io',
      },
    },
  ).then(r => r.json());

  return response;
};
