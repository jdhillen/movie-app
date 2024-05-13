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
  async getMovies(page=1, limit=20) {
    try {
      const response = await apiClient.request(`/movies?page=${page},limit=${limit}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  async searchMovies(search="") {
    try {
      const response = await apiClient.request(`/movies?search=${search}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  },

  searchGenre(genre="") {
    return apiClient.get(`/movies?genre=${genre}`);
  },

  async getMovieById(id) {
    try {
      const response = await apiClient.request(`/movies/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};
