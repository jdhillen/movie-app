<!--|== Template =============================================================================== -->
<template>
  <section class="index"></section>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
import Service from '@/services';
import { useRoute } from 'vue-router';

const route = useRoute()

const movie = await Service.getMovieById(route.params.id);
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.index {
}
</style>