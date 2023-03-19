import { client } from './axiosClient';

export const getToken = () => {
  // eslint-disable-next-line no-console
  console.log('getToken');

  return client.get<string>('/auth/anonymous?platform=subscriptions');
};
// export const getAllCategories = () => client.get<[]>('/categories');
// export const getCategory = (category: string) => client.get<[]>(`/categories/${category}`);
