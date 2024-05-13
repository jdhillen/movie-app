<!--|== Template =============================================================================== -->
<template>
  <div class="thumbnail">
    <router-link :to="{ name: 'Movie', params: { id: id }}">
      <div class="thumbnail_content">
        <div class="thumbnail_img">
          <img :src="poster" :alt="title">
        </div>
        <div class="thumbnail_title">
          <p>{{ title }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const props = defineProps({
  id: {
    type: String,
    default: '',
    required: true,
  },
  poster: {
    type: String,
    default: 'https://placehold.co/300x440',
    required: true,
  },
  title: {
    type: String,
    default: '',
    required: true,
  },
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.thumbnail {
  width: 300px;
  background: $white;
  border-radius: $border-radius;
  display: flex;
  flex-direction: row;
  box-shadow: 2px 2px 6px rgba(#000, 0.1);
  position: relative;
  backface-visibility: hidden;
  margin: 2.5rem !important;

  a {
    width: 100%;
    color: $black;
    text-decoration: none;
  }
}

.thumbnail_content {
  width: 100%;
  position: relative;
}

.thumbnail_img {
  width: 100%;
  height: 440px;
  overflow: hidden;
  position: relative;
  border-radius: $border-radius;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    img {
      transform: scale(1.1);
      transition: all 0.8s ease-in-out;
    }
  }

  img {
    max-width: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
    display: block;
  }
}

.thumbnail_title {
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;

  p {
    font-family: 'Open Sans Regular';
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
}
</style>