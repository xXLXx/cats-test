import axios from 'axios';

export default
  axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    timeout: 30000,
    headers: {
      'X-Api-Key': process.env.REACT_APP_CATS_API_KEY
    }
  });
  