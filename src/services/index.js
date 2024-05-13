// ==|== Imports ===================================================================================
import axios from 'axios';

// ==|== Axios Client ==============================================================================
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: "Bearer " + import.meta.env.VITE_AUTH_TOKEN,
  },
  timeout: 10000
});

// ==|== Export ====================================================================================
export default {
  async getMovies(page=1, limit=25) {
    try {
      const { data } = await apiClient.request(`/movies?page=${page},limit=${limit}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async searchMoviesByName(search="") {
    try {
      const { data } = await apiClient.request(`/movies?search=${search}`);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  },

  async searchMoviesByGenre(genre="") {
    try {
      const { data } = apiClient.get(`/movies?genre=${genre}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  async getMovieById(id) {
    try {
      const { data } = await apiClient.request(`/movies/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};
