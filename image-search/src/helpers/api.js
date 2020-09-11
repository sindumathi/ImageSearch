import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 4c5f81d38d9d186845c8fa8d4af48d1155368271ce81a9919d2c572184fc411f',
  },
});

export const getImages = async (term) => {
  return await instance.get('/search/photos', {
    params: { query: term },
  });
};
