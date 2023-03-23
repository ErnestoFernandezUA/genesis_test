import { client } from './axiosClient';

export const getAllCourses = (token: string) => {
  // eslint-disable-next-line no-console
  console.log('getAllCourses', token);

  return client.get<[]>('/core/preview-courses', {
    headers: {
      Authorization: `token ${token}`,
    },
  });
};
// export const getAllCategories = () => client.get<[]>('/categories');
// export const getCategory = (category: string) => client.get<[]>(`/categories/${category}`);
