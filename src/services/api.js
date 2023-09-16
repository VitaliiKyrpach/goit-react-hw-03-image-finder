import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38632948-8e8b89ba5a3d0480e3442823c';

export const fetch = async (seqrchQuery, currentPage) => {
  console.log(`searching page ${currentPage}`);
  const response = axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: seqrchQuery,
      page: currentPage,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return response;
};
