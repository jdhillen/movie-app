// ==|== Imports ===================================================================================
import { defineStore } from 'pinia';
import Service from '@/services';

// ==|== Store =====================================================================================
export const useDefaultStore = defineStore('default', {

  // ==|== State ===================================================================================
  state: () => {
    return {
      movies: {},
      currentPage: 1,
      totalPages: 0,
    };
  },

  // ==|== Actions =================================================================================
  actions: {
    async fetchMovies(page) {
      const data = await Service.getMovies(page);
      this.movies = data.data;
      this.totalPages = data.totalPages;
    },

    async fetchMoviesBySearch(text) {
      this.movies = await Service.searchMovies(text);
    },

    setPage(page) {
      this.page = page;
    }
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

    getCurrentPage: (state) => {
      if (state.currentPage) {
        return state.currentPage;
      }
    }
  }
});
