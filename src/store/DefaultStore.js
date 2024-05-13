// ==|== Imports ===================================================================================
import { defineStore } from 'pinia';
import Service from '@/services';

// ==|== Store =====================================================================================
export const useDefaultStore = defineStore('default', {

  // ==|== State ===================================================================================
  state: () => {
    return {
      movies: {},
      totalPages: 0,
    };
  },

  // ==|== Actions =================================================================================
  actions: {
    async fetchMovies(page) {
      const { data, totalPages } = await Service.getMovies(page);
      this.movies = data;
      this.totalPages = totalPages;
    },

    async fetchMoviesBySearch(text) {
      this.movies = await Service.searchMoviesByName(text);
    },

    async fetchMoviesByGenre(text) {
      this.movies = await Service.searchMoviesByGenre(text);
    },
  },

  // ==|== Getters =================================================================================
  getters: {
    getMovies: (state) => {
      if (state.movies) {
        return state.movies;
      }
    },

    getTotalPages: (state) => {
      if (state.totalPages) {
        return state.totalPages;
      }
    },
  }
});
