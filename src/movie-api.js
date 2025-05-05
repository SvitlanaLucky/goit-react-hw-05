import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjk1ZjZlYjZjMWQyYzk0ZDA3N2U4MGY0MjJiYmJiOSIsIm5iZiI6MTc0NjM2OTYzNS4zMzYsInN1YiI6IjY4MTc3YzYzYWE2M2Y2MWI2ZTAzMTZhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HTDY8AoJU79m0hreSlDQEpF1IBvQdwZ8EJsFbk9QJj0',
};

export const getTrendingMovies = async (page) => {
  const response = await axios.get(`/3/trending/movie/week?page=${page}`);
  return response.data;
};

export const getMovies = async (page, query) => {
  const response = await axios.get(
    `/3/search/movie?page=${page}&query=${query}`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`/3/movie/${id}`);
  return response.data;
};

export const getMovieReviews = async (id) => {
  const response = await axios.get(`/3/movie/${id}/reviews`);
  return response.data;
};

export const getMovieCast = async (id) => {
  const response = await axios.get(`/3/movie/${id}/credits`);
  return response.data;
};
