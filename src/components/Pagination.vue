<!--|== Template =============================================================================== -->
<template>
  <div class="pagination">
    <router-link class="button" v-for="index in pages" :key="index" :to="{ name: 'Page', params: { id: index }}">{{ index }}</router-link>
  </div>
</template>

<!--|== Scripts ================================================================================ -->
<script setup>
const props = defineProps({
  pages: {
    type: Number,
    default: undefined,
    required: true,
  }
});
</script>

<!--|== CSS ==================================================================================== -->
<style lang="scss">
.pagination {
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0rem !important;
}
</style>