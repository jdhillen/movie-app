<!--|== Template =============================================================================== -->
<template>
  <div class="row">
    <div class="twelve columns">
      <label for="search">Search</label>
      <input id="search" type="text" @keyup.enter="searchMovies" v-model="searchText">
      <button id="submit" @click="searchMovies">Search</button>
    </div>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { ref, onMounted } from 'vue';
import { useDefaultStore } from '@/store/DefaultStore';

const store = useDefaultStore();

var searchText = ref(null);

async function searchMovies(event) {
  store.fetchMoviesBySearch(searchText.value);
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
</style>