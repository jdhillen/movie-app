<!--|== Template =============================================================================== -->
<template>
  <section class="home container">
    <Search/>
    <Pagination :pages="store.totalPages"/>
    <div class="row">
      <div class="twelve columns">
        <div class="thumbnails">
          <template v-for="movie in store.movies" :key="movie.id">
            <Thumbnail :id="movie.id" :poster="movie.posterUrl" :title="movie.title"/>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import { onMounted } from 'vue';
import { useDefaultStore } from '@/store/DefaultStore';
import { useRoute } from 'vue-router';
import Search from '@/components/Search.vue';
import Thumbnail from '@/components/Thumbnail.vue';
import Pagination from '@/components/Pagination.vue';

const store = useDefaultStore();
const route = useRoute();

onMounted(() => {
  store.fetchMoviesBySearch(route.params.name);
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss" scoped>
.thumbnails {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>