import axios from 'axios';

export const fetchImages = async (searchValue, currentPage) => {
  const url = 'https://pixabay.com/api/';
  const urlParams = {
    q: searchValue,
    page: currentPage,
    key: '29748197-52bbc011c9b877a520d9a42a8',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  };

  try {
    const response = await axios.get(url, { params: urlParams });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
