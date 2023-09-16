import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38632948-8e8b89ba5a3d0480e3442823c';

export const getPhotos = async (query, currentPage) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q: query,
      page: currentPage,
    },
  });
  return response;
};
