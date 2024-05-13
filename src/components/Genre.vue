<!--|== Template =============================================================================== -->
<template>
  <div class="row">
    <div class="twelve columns">
      <label for="search">Search by Genre</label>
      <input id="search" type="text" @keyup.enter="searchGenres" v-model="text">
      <button id="submit" @click="searchGenres">Search</button>
    </div>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { ref, onMounted } from 'vue';
import { useDefaultStore } from '@/store/DefaultStore';

const store = useDefaultStore();

var text = ref(null);

async function searchGenres(event) {
  store.fetchMoviesByGenre(text.value);
};
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
</style>