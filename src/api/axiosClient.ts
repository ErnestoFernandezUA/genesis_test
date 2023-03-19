import axios from 'axios';

// const baseURL = 'https://fakestoreapi.com/products';
const baseURL = 'http://api.wisey.app/api/v1';

const instance = axios.create({
  baseURL,
});

type FetchData = {
};

export const client = {
  async get<T>(url: string, config?: any) {
    // eslint-disable-next-line no-console
    console.log('get', baseURL + url, config || 'no config');

    const response = await instance.get<T>(url, config);

    // eslint-disable-next-line no-console
    console.log(response);

    return response.data;
  },

  async post<T>(url: string, data: FetchData) {
    const response = await instance.post<T>(url, data);

    return response.data;
  },

  async patch<T>(url: string, data: FetchData) {
    const response = await instance.patch<T>(url, data);

    return response.data;
  },

  async delete(url: string) {
    return instance.delete(url);
  },
};
