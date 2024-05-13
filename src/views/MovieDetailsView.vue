<!--|== Template =============================================================================== -->
<template>
  <section class="details container">
    <div class="row">
      <div class="twelve columns">
        <div class="details_container">
          <div class="details_left">
            <div class="details_img">
              <img :src="movie.posterUrl" :alt="movie.title">
            </div>
          </div>
          <div class="details_right">
            <h1>{{ movie.title }}</h1>
            <p>Directed By: {{ movie.directors[0] }}</p>
            <h3>Summary</h3>
            <p>{{ movie.summary }}</p>
            <h3>Details</h3>
            <p>Released: {{ movie.datePublished }}</p>
            <p>Rating: {{ movie.rating }}</p>
            <p>RottenTommatos Score: {{ movie.worstRating }}</p>
            <div>
              <h3>Genres</h3>
              <ul>
                <li v-for="genre in movie.genres" :key="genre.id"> {{ genre.title }}</li>
              </ul>
            </div>
            <div>
              <h3>Writers</h3>
              <ul>
                <li v-for="writer in movie.writers"> {{ writer }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import Service from '@/services';
import { useRoute } from 'vue-router';

const route = useRoute()

const movie = await Service.getMovieById(route.params.id);

console.log(movie);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.details {

  &_container {
    display: flex;
    flex-direction: row;

  }

  &_left {

  }

  &_right {
    margin-left: 5rem;
  }

  &_img {
    display: block;
    width: 500px;
    height: auto;
    overflow: hidden;
    position: relative;
    border-radius: $border-radius;
    img {
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
      box-shadow: 2px 2px 6px rgba(#000, 0.1);
    }
  }

}
</style>