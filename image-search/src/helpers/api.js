import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID specify-your-clientid',
  },
});

export const getImages = async (term) => {
  return await instance.get('/search/photos', {
    params: { query: term },
  });
};
