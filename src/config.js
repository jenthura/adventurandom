export default {
  API_ENDPOINT: (process.env.REACT_APP_ENV === 'production')
  ? 'https://calm-mesa-89954.herokuapp.com/'
  : 'http://localhost:8000',
  }