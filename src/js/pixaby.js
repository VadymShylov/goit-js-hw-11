import axios from 'axios';



async function fetchImages(name, page, perPage) {
  const baseURL = 'https://pixabay.com/api/';
  const key = '28386438-dba7fd41c10be8b32090b775f';

  try {
    const response = await axios.get(
      `${baseURL}?key=${key}&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.log('ERROR: ' + error);
  }
}

export { fetchImages };
